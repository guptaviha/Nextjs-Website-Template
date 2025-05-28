import * as React from 'react';
import { Box, Text, Stack, Center, Container } from '@chakra-ui/react'
import { ToolboxItem } from './ToolboxItem';

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
                        {"My Toolbox"}
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        {"Learning and growing one day at a time. Here are the tools currently at my disposal."}
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
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} label={"Python"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} label={"Javascript"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} label={"Typescript"} />
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} label={"NodeJS"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} label={"React"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"} label={"Golang"} />
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
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"} label={"Django"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"} label={"Linux"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} label={"MySQL"} />
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack
                                        direction="row"
                                        spacing={{ base: '30px', sm: '40px', md: '20px', lg: '30px' }} >
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} label={"Git"} />
                                        <ToolboxItem img_src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"} label={"Bash"} />
                                        <ToolboxItem img_src={"https://github.com/devicons/devicon/blob/v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"} label={"AWS"} />
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










