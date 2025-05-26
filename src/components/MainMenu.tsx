import * as React from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, Link, Text, IconButton } from '@chakra-ui/react'
import { useColorMode, Center } from '@chakra-ui/react'
import * as DATA from '../../data/data';

export const MainMenu = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <>
            <Center >
                <Box
                    pt={{ base: '30px', md: '50px', lg: '50px' }}
                    id="Intro"
                    scrollSnapAlign="start">
                    <Stack
                        direction="row"
                        spacing={{ base: '2', sm: '6', md: '10', lg: '14' }} >

                        <Link
                            href="/#Intro"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }} >
                                {DATA.HOME_MENU}
                            </Text>
                        </Link>

                        <Link
                            href="/#About"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                {DATA.ABOUT_MENU}
                            </Text>
                        </Link>

                        <Link
                            href="/#Portfolio"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                {DATA.PORTFOLIO_MENU}
                            </Text>
                        </Link>

                        <Link
                            href="/#Toolbox"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                {DATA.TOOLBOX_MENU}
                            </Text>
                        </Link>

                        <Link
                            href="/blog"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                {DATA.BLOG_MENU}
                            </Text>
                        </Link>

                        <Link
                            data-umami-event="Resume Menu Click"
                            href={DATA.RESUME_SRC}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener">
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                fontFamily="mosk-600"
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                {DATA.RESUME_MENU}
                            </Text>
                        </Link>

                        <IconButton
                            _focus={{ outline: "none" }}
                            onClick={() => toggleColorMode()}
                            aria-label='dark mode toggle'
                            variant='ghost'
                            isRound={true}
                            fontSize='30px'
                            top="-2"
                            icon={colorMode === 'dark' ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
                        />

                    </Stack>
                </Box>
            </Center>

        </>
    );
};