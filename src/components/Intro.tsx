import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { Box, Stack, Text, Avatar } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import * as DATA from '../../data/data';

let currSubIdx = 0;

export const Intro = () => {

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
                                fontSize={{ base: 'xl', md: '2xl' }}
                                fontFamily="mosk-600">
                                {DATA.INTRO_TITLE}
                            </Text>

                            <Stack
                                direction="row" spacing={1}>
                                <Text
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    id="subs-text"
                                    fontFamily="mosk-600"
                                    className={transitionClassName}>
                                    and {DATA.SUBS[currSubIdx]}
                                </Text>
                            </Stack>

                        </Box>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};