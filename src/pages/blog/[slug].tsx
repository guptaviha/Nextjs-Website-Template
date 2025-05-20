// pages/blog/[slug].js
import { getAllPostSlugs, getPostData } from '../../components/Posts';
import { remark } from 'remark';
import html from 'remark-html';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme/theme';
import { Container, Box, useColorMode, Center, Text, Link, IconButton } from '@chakra-ui/react'
import BgImageLight from '../../assets/background-light.jpeg';
import BgImageDark from '../../assets/background-dark.jpeg';
import { MainMenu } from '../../components/MainMenu';
import { AiOutlineArrowLeft } from "react-icons/ai"

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
      },
    },
  };
}

export default function Post({ postData }) {
  const { colorMode, toggleColorMode } = useColorMode();

  let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Container
          backgroundImage={currentBg}
          backgroundSize="100%"
          maxWidth="100%"
          backgroundRepeat="repeat-y"
          scrollSnapType="y proximity"
          scrollPaddingTop="15vh"
        >
          <Center>
            <Box maxWidth="1200px" >
              <MainMenu />
              <Box
                pt={'30px'}
                pb={'200px'}
              >
                <Box pb={'30px'}>
                  <Link
                    href="/blog"
                    target="_self"
                    rel="noopener">
                    <IconButton
                      _focus={{ outline: "none" }}
                      variant='ghost'
                      isRound={true}
                      size='lg'
                      fontSize='30px'
                      aria-label='Github Btn'
                      icon={<AiOutlineArrowLeft />}
                    />
                  </Link>
                </Box>
                <Text fontSize={{ base: 'md', md: 'md' }}
                  fontFamily="mosk-800">
                  {postData.date}
                </Text>
                <Text fontSize={{ base: 'xl', md: '2xl' }}
                  fontFamily="mosk-800">
                  {postData.title}</Text>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </Box>
            </Box>
          </Center>
        </Container>
      </ChakraProvider>
    </>
  );
}
