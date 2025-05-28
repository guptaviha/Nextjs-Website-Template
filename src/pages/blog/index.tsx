import * as React from 'react';
import BgImageLight from '../../assets/background-light.jpeg';
import BgImageDark from '../../assets/background-dark.jpeg';
import { Container, Box, useColorMode, Center, Text, SimpleGrid } from '@chakra-ui/react'
import { MainMenu } from '../../components/MainMenu';
import Link from 'next/link';
import { getSortedPostsData } from '../../components/Posts';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Layout from '../layout';
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import { BlogCard } from '../../components/BlogCard';



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
                                {"Vee's Musings"}
                            </Text>

                            <Text
                                fontSize="xl"
                                fontFamily="mosk-400">
                                {"Here is where I share my thoughts."}
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
                                                        <BlogCard
                                                            slug={slug}
                                                            cardBg={cardBg}
                                                            date={date}
                                                            title={title}
                                                            desc={desc}
                                                            pinned={true}
                                                        />
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
                                                        <BlogCard
                                                            slug={slug}
                                                            cardBg={cardBg}
                                                            date={date}
                                                            title={title}
                                                            desc={desc}
                                                            pinned={false}
                                                        />
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