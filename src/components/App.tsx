import * as React from 'react';
import { Landing } from './Landing';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Toolbox } from './Toolbox';
import BgImageLight from '../assets/background-light.jpeg';
import BgImageDark from '../assets/background-dark2.png';
import { Container, useColorMode } from '@chakra-ui/react'

export const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`

    return (
        <>
        <Container backgroundImage={currentBg} backgroundSize= "100% 100%" maxWidth= "100%" >
            <Landing />
            {/* <hr></hr> */}
            <About />
            {/* <hr></hr> */}
            <Portfolio />
            {/* <hr></hr> */}
            <Toolbox />
            <hr></hr>
            </Container>
        </>
    );
};