import * as React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Box, Text, Stack, IconButton, Link, useToast, Center } from '@chakra-ui/react'
import * as DATA from '../../data/data';

export const About = () => {

    const toast = useToast()

    return (
        <>
            {/* About Me */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt={{ base: '100px', md: '150px', lg: '200px' }}
                    pb={{ base: '100px', md: '150px', lg: '200px' }}
                    id="About"
                    scrollSnapAlign="start">

                    <Text
                        fontSize="2xl"
                        fontFamily="mosk-800">
                        {DATA.ABOUT_TITLE}
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        {DATA.ABOUT_DESC}
                    </Text>
                    <br></br>

                    <Center>
                        <Box
                            pt="5" >
                            <Stack
                                direction="row"
                                spacing="50px" >

                                <Link
                                    href={DATA.GITHUB_SRC}
                                    target="_blank"
                                    rel="noopener">
                                    <IconButton
                                        _focus={{ outline: "none" }}
                                        variant='ghost'
                                        isRound={true}
                                        size='lg'
                                        fontSize='30px'
                                        aria-label='Github Btn'
                                        icon={<AiFillGithub />}
                                    />
                                </Link>

                                <Link
                                    href={DATA.LINKEDIN_SRC}
                                    target="_blank"
                                    rel="noopener">
                                    <IconButton
                                        _focus={{ outline: "none" }}
                                        variant='ghost'
                                        isRound={true}
                                        size='lg'
                                        fontSize='30px'
                                        aria-label='Linkedin Btn'
                                        icon={<AiFillLinkedin />}
                                    />
                                </Link>

                                <IconButton
                                    _focus={{ outline: "none" }}
                                    onClick={() => {
                                        navigator.clipboard.writeText(DATA.EMAIL);
                                        toast({
                                            title: DATA.EMAIL_TOAST_TXT,
                                            status: 'success',
                                            duration: 5500,
                                            position: 'top',
                                            isClosable: true,
                                        })
                                    }}
                                    variant='ghost'
                                    isRound={true}
                                    size='lg'
                                    fontSize='30px'
                                    aria-label='Email Btn'
                                    icon={<MdEmail />}
                                />

                            </Stack>

                        </Box>
                    </Center>
                </Box>
            </Center>
        </>
    );
};