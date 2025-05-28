import * as React from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { Box, Stack, IconButton } from '@chakra-ui/react'
import { useColorMode, Center } from '@chakra-ui/react'
import { MenuItem } from './MenuItem';

export const MainMenu = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <>
            <Center >
                <Box
                    pt={{ base: '30px', md: '50px', lg: '50px' }}
                    id="Intro"
                    scrollSnapAlign="start">
                    <Stack
                        direction="row"
                        spacing={{ base: '2', sm: '6', md: '10', lg: '14' }} >

                        <MenuItem
                            linkSrc={"/#Intro"}
                            text={"Home"}
                        />

                        <MenuItem
                            linkSrc={"/#About"}
                            text={"About"}
                        />

                        <MenuItem
                            linkSrc={"/#Portfolio"}
                            text={"Portfolio"}
                        />

                        <MenuItem
                            linkSrc={"/#Toolbox"}
                            text={"Toolbox"}
                        />

                        <MenuItem
                            linkSrc={"/blog"}
                            text={"Blog"}
                        />

                        <MenuItem
                            umamiEvent={"Resume Menu Click"}
                            linkSrc={"https://drive.google.com/file/d/1adbVEQlOiig7DPj63MIAwBXMHYW7_RSZ/view?usp=sharing"}
                            text={"Resume"}
                        />

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

        </>
    );
};