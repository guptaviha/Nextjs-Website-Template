import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, Link, Text, IconButton, Avatar } from '@chakra-ui/react'
import { useDisclosure, useColorMode, Center } from '@chakra-ui/react'


export const Landing = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            {/* Menu */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt="30px"
                    id="Landing">
                    <Stack
                        direction="row"
                        spacing={{ base: '6', md: '10', lg: '14' }} >

                        <Link
                            href="#Landing"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize='xlg'
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }} >
                                Home
                            </Text>
                        </Link>

                        <Link
                            href="#About"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize='xlg'
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                About
                            </Text>
                        </Link>

                        <Link
                            href="#Portfolio"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize='xlg'
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                Portfolio
                            </Text>
                        </Link>

                        <Link
                            href="#Toolbox"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize='xlg'
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                Toolbox
                            </Text>
                        </Link>

                        <Link
                            href="https://drive.google.com/file/d/1rSQnWD5ALtBDj2-x0GHApMcHRIgeXgw1/view?usp=sharing"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener">
                            <Text
                                fontSize='xlg'
                                _hover={{ transform: "scale(1.1)" }}
                                style={{ transition: "transform .5s ease-in-out" }}>
                                Resume
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

            {/* Intro Banner */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt="160px"
                    pb="200px" >
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={2}>

                        {/* Text Part */}
                        <Box
                            pt="30px"
                            pr={{ base: '20px', md: '30px', lg: '40px' }}>

                            <Text fontSize='5xl' pl="40px">
                                👋🏽 Hi, I'm Viha!
                            </Text>
                            <br></br>
                            <Text fontSize='xl'>
                                Your friendly neighborhood Software Developer
                            </Text>

                            <Text fontSize='xl'>
                                and stackoverflow copy-n-paste expert 👩🏾‍💻
                            </Text>
                            {/* <Text fontSize='xl'>and part-time ukulele enthusiast 🎵</Text> */}
                            {/* <Text fontSize='sm'>and figure skating novice ⛸</Text> */}
                            {/* <Text fontSize='sm'>and Wikipedia rabbit-hole victim 📗</Text> */}
                            {/* <Text fontSize='sm'>and nature documentary nerd 🌎</Text> */}
                            {/* <Text fontSize='sm'>and ardent TraderJoes explorer 🛒</Text> */}
                            {/* <Text fontSize='sm'>and occaional painting dilettante 🎨</Text> */}

                        </Box>

                        {/* Avatar Part */}
                        <Center>
                            <Avatar
                                name="Viha Gupta"
                                src={AvatarImage.src}
                                width={{ base: '150px', md: '150px', lg: '200px' }}
                                height={{ base: '150px', md: '150px', lg: '200px' }}
                                bg="none" />
                        </Center>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};