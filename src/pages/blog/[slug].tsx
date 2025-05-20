// pages/blog/[slug].js
import { getAllPostSlugs, getPostData } from '../../components/Posts';
import { remark } from 'remark';
import html from 'remark-html';
import { Container, Box, useColorMode, Center, Text, Link, IconButton } from '@chakra-ui/react'
import BgImageLight from '../../assets/background-light.jpeg';
import BgImageDark from '../../assets/background-dark.jpeg';
import { MainMenu } from '../../components/MainMenu';
import { AiOutlineArrowLeft } from "react-icons/ai"
import Markdown from 'react-markdown'
import Layout from '../layout';

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
  let cardBg = colorMode === 'dark' ? `gray.700` : `gray.50`
  return (
    <>
      <Container
        backgroundImage={currentBg}
        backgroundSize="100% 100%"
        maxWidth="100%"
        height="100vh"
        scrollPaddingTop="15vh"
        overflowY="scroll">
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
                    aria-label='Back Btn'
                    icon={<AiOutlineArrowLeft />}
                  />
                </Link>
              </Box>

              {/* The Blog */}
              <Box
                maxW={{ base: 'sm', md: '3xl' }}
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                bg={cardBg}
                shadow={"xl"}
              >
                <hr></hr>
                <Box p='10'>
                  <Text fontSize={{ base: 'md', md: 'md' }}
                    fontFamily="mosk-800">
                    {postData.date}
                  </Text>

                  <Text fontSize={{ base: 'xl', md: '2xl' }}
                    fontFamily="mosk-800">
                    {postData.title}
                  </Text>

                  <br />
                  <Markdown>{postData.content}</Markdown>
                </Box>
              </Box>
            </Box>
          </Box>
        </Center>
      </Container>
    </>
  );
}

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};