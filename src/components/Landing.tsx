import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, Link, Text, IconButton, Avatar } from '@chakra-ui/react'
import { useDisclosure, useColorMode, Center } from '@chakra-ui/react'

const subs = [
    'stackoverflow copy-n-paste expert 👩🏾‍💻',
    'part-time ukulele enthusiast 🎵',
    'figure skating novice ⛸',
    'Wikipedia rabbit-hole victim 📗',
    'nature documentary nerd 🌎',
    'ardent TraderJoes explorer 🛒',
    'occasional painting dilettante 🎨'
];


let currSubIdx = 0;

export const Landing = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    let [transitionClassName, setTransitionClassName] = React.useState('fade-in');

    React.useEffect(() => {
        setInterval(async () => {
            setTransitionClassName('fade-out');
            setTimeout(() => {
                const newIdx = currSubIdx === subs.length - 1 ? 0 : currSubIdx + 1;
                currSubIdx = newIdx;
                setTransitionClassName('fade-in');
            }, 200);

        }, 2300);
    }, []);

    return (
        <>
            {/* Menu */}
            <Center >
                <Box
                    pt={{ base: '30px', md: '50px', lg: '50px' }}
                    id="Landing"
                    scrollSnapAlign="start">
                    <Stack
                        direction="row"
                        spacing={{ base: '2', sm: '6', md: '10', lg: '14' }} >

                        <Link
                            href="#Landing"
                            style={{ textDecoration: "none" }}>
                            <Text
                                fontSize='xlg'
                                fontFamily="mosk-600"
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
                                fontFamily="mosk-600"
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
                                fontFamily="mosk-600"
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
                                fontFamily="mosk-600"
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
                                fontFamily="mosk-600"
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
                    pt={{ base: '100px', md: '150px', lg: '200px' }}
                    pb={{ base: '100px', md: '150px', lg: '200px' }} >
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
                            pt="20px" >
                            <Center>
                                <Text
                                    fontSize={{ base: '4xl', md: '5xl' }}
                                    fontFamily="mosk-800">
                                    👋🏽 Hi, I'm Viha!
                                </Text>
                            </Center>
                            <br></br>
                            <Text
                                fontSize='2xl'
                                fontFamily="mosk-600">
                                Your friendly neighborhood Software Dev
                            </Text>

                            <Stack
                                direction="row" spacing={1}>
                                <Text
                                    fontSize='2xl'
                                    id="subs-text"
                                    fontFamily="mosk-600">
                                    and
                                </Text>
                                <Text
                                    fontSize='2xl'
                                    id="subs-text"
                                    fontFamily="mosk-600"
                                    className={transitionClassName}>
                                    {subs[currSubIdx]}
                                </Text>
                            </Stack>

                        </Box>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};