import * as React from 'react';
import { Box, Text, Stack, Image, Center, Container } from '@chakra-ui/react'

export const Toolbox = () => {

    return (
        <>
            {/* My Toolbox */}
            <Center>
                <Box
                    // px="200px" 
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt="200px"
                    pb="240px"
                    id="Toolbox">

                    <Text fontSize="2xl">
                        My Toolbox
                    </Text>
                    <br></br>
                    <Text fontSize="xl">
                        Ever expanding, but here are the tools currently at my disposal.
                    </Text>
                    <br></br>


                    <Container>
                        <Center>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={4} >
                            <Box>
                                <Stack
                                    direction="row"
                                    spacing={4} >
                                    {/* Python */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* JS */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* TS */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                        width={70}
                                        height={70}
                                    />
                                </Stack>
                            </Box>
                            <Box>
                                <Stack
                                    direction="row"
                                    spacing={4} >
                                    {/* NodeJS */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* React */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* Go */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                                        width={70}
                                        height={70}
                                    />
                                </Stack>
                            </Box>
                        </Stack>
                        </Center>

                        <br></br>

                        <Center>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={4} >
                            <Box>
                                <Stack
                                    direction="row"
                                    spacing={4} >
                                    {/* Linux */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* MySQL */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* Spark */}

                                    {/* Git */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        width={70}
                                        height={70}
                                    />
                                </Stack>
                            </Box>
                            <Box>
                                <Stack
                                    direction="row"
                                    spacing={4} >
                                    {/* Bash */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                                        width={70}
                                        height={70}
                                    />

                                    {/* AWS */}
                                    <Image
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                                        width={70}
                                        height={70}
                                    />
                                </Stack>
                            </Box>

                        </Stack>
                        </Center>
                    </Container>

                </Box>
            </Center>
        </>
    );
};










