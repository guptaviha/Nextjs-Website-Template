import * as React from 'react';
import { Landing } from './Landing';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Toolbox } from './Toolbox';
import BgImageLight from '../assets/background-light.jpeg';
import BgImageDark from '../assets/background-dark.jpeg';
import { Container, Box, useColorMode, Center } from '@chakra-ui/react'

export const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`

    return (
        <>
            <Container
                backgroundImage={currentBg}
                backgroundSize="100% 100%"
                maxWidth="100%"
                scrollSnapType="y proximity"
                scrollPaddingTop="15vh"
                overflowY="scroll">
                <Center>
                    <Box maxWidth="1200px" >
                        <Landing />
                        <About />
                        <Portfolio />
                        <Toolbox />
                        <hr></hr>
                    </Box>
                </Center>
            </Container>
        </>
    );
};