import * as React from 'react';
import { Box, Text, Stack, Image, Center, Container } from '@chakra-ui/react'

export const Toolbox = () => {

    return (
        <>
            {/* My Toolbox */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt={{ base: '100px', md: '150px', lg: '200px' }}
                    pb={{ base: '180px', md: '220px', lg: '280px' }}
                    id="Toolbox"
                    scrollSnapAlign="start">

                    <Text
                        fontSize="2xl"
                        fontFamily="mosk-800">
                        My Toolbox
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        Ever expanding, but here are the tools currently at my disposal.
                    </Text>
                    <br></br>


                    <Container>
                        <Center>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                        {/* Python */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Python
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* JS */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Javascript
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* TS */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Typescript
                                                </Text>
                                            </Center>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                        {/* NodeJS */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    NodeJS
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* React */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    React
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* Go */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Golang
                                                </Text>
                                            </Center>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Center>

                        <br></br>

                        <Center>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                        {/* Linux */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Linux
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* MySQL */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    MySQL
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* Spark */}

                                        {/* Git */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Git
                                                </Text>
                                            </Center>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >

                                        {/* Bash */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    Bash
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* AWS */}
                                        <Box>
                                            <Image
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    AWS
                                                </Text>
                                            </Center>
                                        </Box>
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










