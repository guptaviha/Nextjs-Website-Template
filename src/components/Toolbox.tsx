import * as React from 'react';
import { Box, Text, Stack, Image, Center, Container } from '@chakra-ui/react'
import * as DATA from '../../data/data';

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
                        {DATA.TOOLBOX_TITLE}
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        {DATA.TOOLBOX_DESC}
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
                                                src={DATA.PYTHON_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.PYTHON_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* JS */}
                                        <Box>
                                            <Image
                                                src={DATA.JAVASCRIPT_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.JAVASCRIPT_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* TS */}
                                        <Box>
                                            <Image
                                                src={DATA.TYPESCRIPT_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.TYPESCRIPT_LABEL}
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
                                                src={DATA.NODEJS_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.NODEJS_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* React */}
                                        <Box>
                                            <Image
                                                src={DATA.REACT_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.REACT_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* Go */}
                                        <Box>
                                            <Image
                                                src={DATA.GOLANG_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.GOLANG_LABEL}
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
                                        {/* Django */}
                                        <Box>
                                            <Image
                                                src={DATA.DJANGO_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.DJANGO_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* Linux */}
                                        <Box>
                                            <Image
                                                src={DATA.LINUX_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.LINUX_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* MySQL */}
                                        <Box>
                                            <Image
                                                src={DATA.MYSQL_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.MYSQL_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>


                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >

                                        {/* Git */}
                                        <Box>
                                            <Image
                                                src={DATA.GIT_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.GIT_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* Bash */}
                                        <Box>
                                            <Image
                                                src={DATA.BASH_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.BASH_LABEL}
                                                </Text>
                                            </Center>
                                        </Box>

                                        {/* AWS */}
                                        <Box>
                                            <Image
                                                src={DATA.AWS_SRC}
                                                width={{ base: '60px', md: '70px', lg: '70px' }}
                                                height={{ base: '60px', md: '70px', lg: '70px' }}
                                            />
                                            <Center>
                                                <Text fontFamily="mosk-500" >
                                                    {DATA.AWS_LABEL}
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










