import * as React from 'react';
import BgImageLight from '../../assets/background-light.jpeg';
import BgImageDark from '../../assets/background-dark.jpeg';
import { Container, Box, useColorMode, Center, Text, SimpleGrid } from '@chakra-ui/react'
import { MainMenu } from '../../components/MainMenu';
import * as DATA from '../../../data/data';
import Link from 'next/link';
import { getSortedPostsData } from '../../components/Posts';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Layout from '../layout';
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';



export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData },
    };
}

export default function Index({ allPostsData }) {
    const { colorMode, toggleColorMode } = useColorMode();

    let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`
    let cardBg = colorMode === 'dark' ? `gray.700` : `gray.50`

    const POSTS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = React.useState(1);

    const allPublishedPosts = allPostsData.filter(post => post.publish === 'yes');
    const pinnedPosts = allPublishedPosts.filter(post => post.pin === 'yes');
    const unpinnedPosts = allPublishedPosts.filter(post => post.pin !== 'yes');

    const totalPages = Math.ceil(unpinnedPosts.length / POSTS_PER_PAGE);

    const paginatedPosts = unpinnedPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

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
                            px={{ base: '50px', md: '100px', lg: '200px' }}
                            pt={'30px'}
                            pb={'30px'}
                            id="About"
                            scrollSnapAlign="start">
                            <Text
                                fontSize="2xl"
                                fontFamily="mosk-800">
                                {DATA.BLOG_TITLE}
                            </Text>
                            {/* <br></br> */}
                            <Text
                                fontSize="xl"
                                fontFamily="mosk-400">
                                {DATA.BLOG_DESC}
                            </Text>
                            <br></br>
                        </Box>
                        <Box
                            px={{ base: '50px', md: '100px', lg: '200px' }}
                            pb={'200px'}
                            scrollSnapAlign="start">


                            {/* Pinned Posts */}
                            {pinnedPosts.length > 0 && (
                                <Accordion defaultIndex={[0]} allowMultiple>
                                    <AccordionItem>
                                        <Box mb={10}>
                                            <AccordionButton>
                                                <Text fontSize="lg" fontFamily="mosk-700" >
                                                    📌 Pinned Posts
                                                </Text>
                                                <AccordionIcon />
                                            </AccordionButton>

                                            <AccordionPanel pb={10}>
                                                <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} columnGap="4" rowGap="4">
                                                    {pinnedPosts.map(({ slug, title, date, desc }) => (
                                                        <Link
                                                            key={slug}
                                                            href={`/blog/${slug}`}
                                                            target="_blank"
                                                            rel="noopener"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Box
                                                                position="relative"
                                                                maxW={{ base: 'sm', md: 'xl' }}
                                                                borderWidth='1px'
                                                                borderRadius='lg'
                                                                overflow='hidden'
                                                                bg={cardBg}
                                                                shadow={"xl"}
                                                                _hover={{ boxShadow: "2xl", cursor: "pointer" }}
                                                            >
                                                                <StarIcon
                                                                    color="yellow.400"
                                                                    boxSize={4}
                                                                    position="absolute"
                                                                    top={6}
                                                                    right={6}
                                                                    zIndex={1}
                                                                />
                                                                <Box p='6'>
                                                                    <Box
                                                                        as='span'
                                                                        fontSize='sm'>
                                                                        {date}
                                                                    </Box>
                                                                    <Box
                                                                        mt='1'
                                                                        fontFamily="mosk-700"
                                                                        as='h3'
                                                                        lineHeight='tight'
                                                                        noOfLines={1}>
                                                                        {title}
                                                                    </Box>
                                                                    <Box
                                                                        as='h6'
                                                                        fontSize='md'
                                                                        noOfLines={2}>
                                                                        {desc}
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                    ))}
                                                </SimpleGrid>
                                            </AccordionPanel>
                                        </Box>
                                    </AccordionItem>
                                </Accordion>
                            )}

                            {/* App Other Posts */}
                            {unpinnedPosts.length > 0 && (
                                <Accordion defaultIndex={[0]} allowMultiple>
                                    <AccordionItem>
                                        <Box mb={10}>
                                            <AccordionButton>
                                                <Text fontSize="lg" fontFamily="mosk-700" >
                                                    📝 More Posts
                                                </Text>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={10}>
                                                <SimpleGrid
                                                    columns={{ base: 1, lg: 2, xl: 3 }}
                                                    columnGap="4" rowGap="4"
                                                >
                                                    {paginatedPosts?.map(({ slug, title, date, desc }) => (

                                                        <Link
                                                            href={`/blog/${slug}`}
                                                            target="_blank"
                                                            rel="noopener"
                                                            style={{ textDecoration: "none" }}>
                                                            <Box

                                                                maxW={{ base: 'sm', md: 'xl' }}
                                                                borderWidth='1px'
                                                                borderRadius='lg'
                                                                overflow='hidden'
                                                                bg={cardBg}
                                                                shadow={"xl"}
                                                                _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                                                                <hr></hr>
                                                                <Box p='6'>
                                                                    <Box
                                                                        as='span'
                                                                        fontSize='sm'>
                                                                        {date}
                                                                    </Box>
                                                                    <Box
                                                                        mt='1'
                                                                        fontFamily="mosk-700"
                                                                        as='h3'
                                                                        lineHeight='tight'
                                                                        noOfLines={1}>
                                                                        {title}
                                                                    </Box>
                                                                    <Box
                                                                        as='h6'
                                                                        fontSize='md'
                                                                        noOfLines={2}>
                                                                        {desc}
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Link>

                                                    ))}
                                                </SimpleGrid>
                                                {/* Pagination Menu */}
                                                <Center mt={8}>
                                                    <ButtonGroup>
                                                        <Button
                                                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                                            isDisabled={currentPage === 1}
                                                        >
                                                            Previous
                                                        </Button>
                                                        {[...Array(totalPages)].map((_, idx) => (
                                                            <Button
                                                                key={idx}
                                                                onClick={() => setCurrentPage(idx + 1)}
                                                                isActive={currentPage === idx + 1}
                                                                variant={currentPage === idx + 1 ? "solid" : "outline"}
                                                            >
                                                                {idx + 1}
                                                            </Button>
                                                        ))}
                                                        <Button
                                                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                                            isDisabled={currentPage === totalPages}
                                                        >
                                                            Next
                                                        </Button>
                                                    </ButtonGroup>
                                                </Center>
                                            </AccordionPanel>
                                        </Box>
                                    </AccordionItem>
                                </Accordion>
                            )}
                        </Box>
                    </Box>
                </Center>
            </Container>
        </>
    )
};

Index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};