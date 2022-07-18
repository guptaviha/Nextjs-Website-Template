import * as React from 'react';
import LibreImage from '../../src/assets/libre.png';
import ElonButAIImage from '../../src/assets/elonButAI2.png';

import { Box, Text, Stack, Link, Image } from '@chakra-ui/react'

export const Portfolio = () => {

    return (
        <>
            {/* Portfolio */}
            <Box p="200px" id="Portfolio">

                <Text fontSize="2xl"> My Portfolio</Text>
                <br></br>
                <Text fontSize="lg">Check out some of my work.</Text>
                <br></br>

                <Stack direction="row" spacing={4} >

                    <Link href="https://libre.ink" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="black" _hover={{ boxShadow: "2xl" }}>
                            <Image src={LibreImage.src} />
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    libre.ink
                                </Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    A uniquely instant anonymous blogging website. Everything you type lives in the URL.
                                </Box>
                            </Box>
                        </Box>
                    </Link>

                    <Link href="https://twitter.com/ElonButAI" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="black" _hover={{ boxShadow: "2xl" }}>
                            <Image src={ElonButAIImage.src} />
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    elonButAI
                                </Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    A Twitter Bot account that posts AI-generated fake tweets as Elon Musk. Fine tuned on GPT2.
                                </Box>
                            </Box>
                        </Box>
                    </Link>

                </Stack>

            </Box>
        </>
    );
};










