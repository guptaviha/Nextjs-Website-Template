import * as React from 'react';
import BgImageLight from '../../assets/background-light.jpeg';
import BgImageDark from '../../assets/background-dark.jpeg';
import { Container, Box, useColorMode, Center } from '@chakra-ui/react'
import { MainMenu } from '../../components/MainMenu';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme/theme';

function Index() {
    // const { colorMode, toggleColorMode } = useColorMode();

    // let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`

    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <Container
                    // backgroundImage={currentBg}
                    backgroundSize="100% 100%"
                    maxWidth="100%"
                    scrollSnapType="y proximity"
                    scrollPaddingTop="15vh"
                    overflowY="scroll">
                    <Center>
                        <Box maxWidth="1200px" >
                            <MainMenu />

                            <hr></hr>
                        </Box>
                    </Center>
                </Container>
            </ChakraProvider>
        </>
    )

};

export default Index;

