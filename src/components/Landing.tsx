import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, Link, Text, IconButton, Avatar } from '@chakra-ui/react'
import { useDisclosure, useColorMode, Center, SlideFade } from '@chakra-ui/react'


export const Landing = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure()


    const subs = [
        'and stackoverflow copy-n-paste expert 👩🏾‍💻',
        'and part-time ukulele enthusiast 🎵',
        'and figure skating novice ⛸',
        'and Wikipedia rabbit-hole victim 📗',
        'and nature documentary nerd 🌎',
        'and ardent TraderJoes explorer 🛒',
        'and occaional painting dilettante 🎨'
    ]

    let subsIndex = 0
    const [currSub, setCurrSub] = React.useState(subs[subsIndex]);

    // const element=document.getElementById("subs-text");
    // setInterval(function() {element.innerHTML += "Hello"}, 1000);

    // document.getElementById("subs-text").innerHTML += "Hello"

    React.useEffect(() => {
        setInterval(() => {
            subsIndex == 6 ? subsIndex = 0 : subsIndex += 1;
            setCurrSub(subs[subsIndex])
        }, 2000);
    }, []);

    return (
        <>
            {/* Menu */}
            <Center >
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt="50px"
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

                        {/* Avatar Part */}
                        <Center>
                            <Avatar
                                name="Viha Gupta"
                                src={AvatarImage.src}
                                width={{ base: '150px', md: '150px', lg: '200px' }}
                                height={{ base: '150px', md: '150px', lg: '200px' }}
                                bg="none" />
                        </Center>

                        {/* Text Part */}
                        <Box
                            pt="30px" >

                            <Text fontSize='5xl' pl="40px">
                                👋🏽 Hi, I'm Viha!
                            </Text>
                            <br></br>
                            <Text fontSize='xl'>
                                Your friendly neighborhood Software Developer
                            </Text>

                            <SlideFade in={true} offsetY='20px'>
                                <Text fontSize='xl' id="subs-text">
                                    {/* {subs[0]} */}
                                    {currSub}
                                </Text>
                            </SlideFade>

                        </Box>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};