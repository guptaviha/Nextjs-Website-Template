import * as React from 'react';
import LibreImage from '../../src/assets/libre.png';
import ElonButAIImage from '../../src/assets/elonButAI2.png';
import NYCBasics from '../../src/assets/NYCBasics.png';

import { Box, Text, Stack, Link, Image, Center, useColorMode } from '@chakra-ui/react'
import * as DATA from '../../data/data';

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
                        {DATA.PORTFOLIO_TITLE}
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        {DATA.PORTFOLIO_DESC}
                    </Text>
                    <br></br>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4} >

                        <Link
                            href={DATA.PROJ_1_SRC}
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
                                <Image
                                    src={LibreImage.src} />
                                <hr></hr>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        fontFamily="mosk-700"
                                        as='h3'
                                        lineHeight='tight'
                                        noOfLines={1}>
                                        libre.ink
                                    </Box>
                                    <Box
                                        as='span'
                                        fontSize='sm'>
                                        A uniquely instant anonymous blogging website. Everything you type lives in the URL.
                                    </Box>
                                </Box>
                            </Box>
                        </Link>

                        <Link
                            href={DATA.PROJ_2_SRC}
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
                                _hover={{ boxShadow: "2xl", cursor: "pointer"  }}>
                                <Image
                                    src={ElonButAIImage.src} />
                                <hr></hr>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        fontFamily="mosk-700"
                                        as='h3'
                                        lineHeight='tight'
                                        noOfLines={1}>
                                        {DATA.PROJ_2_TITLE}
                                    </Box>
                                    <Box
                                        as='span'
                                        fontSize='sm'>
                                        {DATA.PROJ_2_DESC}
                                    </Box>
                                </Box>
                            </Box>
                        </Link>

                        <Link
                            href={DATA.PROJ_3_SRC}
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
                                _hover={{ boxShadow: "2xl", cursor: "pointer"  }}>
                                <Image
                                    src={NYCBasics.src} />
                                <hr></hr>
                                <Box p='6'>
                                    <Box
                                        mt='1'
                                        fontFamily="mosk-700"
                                        as='h3'
                                        lineHeight='tight'
                                        noOfLines={1}>
                                        {DATA.PROJ_3_TITLE}
                                    </Box>
                                    <Box
                                        as='span'
                                        fontSize='sm'>
                                        {DATA.PROJ_3_DESC}
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










