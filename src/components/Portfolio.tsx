import * as React from 'react';
import LibreImage from '../../src/assets/libre.png';
import ElonButAIImage from '../../src/assets/elonButAI2.png';

import { Box, Text, Stack, Link, Image, Center, useColorMode } from '@chakra-ui/react'

export const Portfolio = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    let cardBg = colorMode === 'dark' ? `gray.700` : `gray.50`

    return (
        <>
            {/* Portfolio */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt={{ base: '100px', md: '150px', lg: '200px' }}
                    pb={{ base: '100px', md: '150px', lg: '200px' }}
                    id="Portfolio"
                    scrollSnapAlign="start">

                    <Text 
                        fontSize="2xl"
                        fontFamily="mosk-800">
                        My Portfolio
                    </Text>
                    <br></br>
                    <Text 
                        fontSize="xl"
                        fontFamily="mosk-400">
                        Check out some of my work.
                    </Text>
                    <br></br>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4} >

                        <Link
                            href="https://libre.ink"
                            target="_blank"
                            rel="noopener"
                            style={{ textDecoration: "none" }}>
                            <Box
                                maxW={{ base: 'sm', md: 'xl' }}
                                borderWidth='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                bg={cardBg}
                                _hover={{ boxShadow: "2xl" }}>
                                <Image
                                    src={LibreImage.src} />
                                <hr></hr>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        // fontWeight='semibold'
                                        fontFamily="mosk-700"
                                        as='h3'
                                        lineHeight='tight'
                                        noOfLines={1}>
                                        libre.ink
                                    </Box>
                                    <Box
                                        as='span'
                                        // color='gray.600'
                                        fontSize='sm'>
                                        A uniquely instant anonymous blogging website. Everything you type lives in the URL.
                                    </Box>
                                </Box>
                            </Box>
                        </Link>

                        <Link
                            href="https://twitter.com/ElonButAI"
                            target="_blank"
                            rel="noopener"
                            style={{ textDecoration: "none" }}>
                            <Box
                                maxW={{ base: 'sm', md: 'xl' }}
                                borderWidth='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                bg={cardBg}
                                _hover={{ boxShadow: "2xl" }}>
                                <Image
                                    src={ElonButAIImage.src} />
                                    <hr></hr>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        // fontWeight='semibold'
                                        fontFamily="mosk-700"
                                        as='h3'
                                        lineHeight='tight'
                                        noOfLines={1}>
                                        elonButAI
                                    </Box>
                                    <Box
                                        as='span'
                                        // color='gray.600'
                                        fontSize='sm'>
                                        A Twitter Bot account that posts AI-generated fake tweets as Elon Musk. Fine tuned on GPT2.
                                    </Box>
                                </Box>
                            </Box>
                        </Link>

                    </Stack>

                </Box>
            </Center>
        </>
    );
};










