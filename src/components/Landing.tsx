import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, Link, Text, IconButton, Avatar } from '@chakra-ui/react'
import { useColorMode, Center } from '@chakra-ui/react'
import * as DATA from '../../data/data';

let currSubIdx = 0;

export const Landing = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    let [transitionClassName, setTransitionClassName] = React.useState('fade-in');

    React.useEffect(() => {
        setInterval(async () => {
            setTransitionClassName('fade-out');
            setTimeout(() => {
                const newIdx = currSubIdx === DATA.SUBS.length - 1 ? 0 : currSubIdx + 1;
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
                                {DATA.HOME_MENU}
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
                                {DATA.ABOUT_MENU}
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
                                {DATA.PORTFOLIO_MENU}
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
                                {DATA.TOOLBOX_MENU}
                            </Text>
                        </Link>

                        <Link
                            href={DATA.RESUME_SRC}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener">
                            <Text
                                fontSize='xlg'
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
                                name={DATA.AVATAR_NAME}
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
                                {DATA.GREETING_TXT}
                                </Text>
                            </Center>
                            <br></br>
                            <Text
                                fontSize='2xl'
                                fontFamily="mosk-600">
                                {DATA.INTRO_TITLE}
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
                                    {DATA.SUBS[currSubIdx]}
                                </Text>
                            </Stack>

                        </Box>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};