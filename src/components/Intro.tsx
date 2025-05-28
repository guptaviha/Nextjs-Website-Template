import * as React from 'react';
import AvatarImage from '../../src/assets/avatar.png';
import { Box, Stack, Text, Avatar } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'

let currSubIdx = 0;

const SUBS = [
    'stackoverflow copy-n-paste expert 👩🏾‍💻',
    'part-time ukulele enthusiast 🎵',
    'figure skating novice ⛸',
    'Wikipedia rabbit-hole victim 📗',
    'nature documentary nerd 🌎',
    'ardent TraderJoes explorer 🛒',
    'occasional painting dilettante 🎨'
];

export const Intro = () => {

    let [transitionClassName, setTransitionClassName] = React.useState('fade-in');

    React.useEffect(() => {
        setInterval(async () => {
            setTransitionClassName('fade-out');
            setTimeout(() => {
                const newIdx = currSubIdx === SUBS.length - 1 ? 0 : currSubIdx + 1;
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
                                name={"Viha Gupta"}
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
                                    {"👋🏽 Hi, I'm Viha!"}
                                </Text>
                            </Center>
                            <br></br>
                            <Text
                                fontSize={{ base: 'xl', md: '2xl' }}
                                fontFamily="mosk-600">
                                {"Your friendly neighborhood Software Dev"}
                            </Text>

                            <Stack
                                direction="row" spacing={1}>
                                <Text
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    id="subs-text"
                                    fontFamily="mosk-600"
                                    className={transitionClassName}>
                                    and {SUBS[currSubIdx]}
                                </Text>
                            </Stack>

                        </Box>

                    </Stack>
                </Box>
            </Center>

        </>
    );
};