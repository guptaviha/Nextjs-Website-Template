import * as React from 'react';
import { Landing } from './Landing';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Toolbox } from './Toolbox';
import BgImageLight from '../assets/background-light.jpeg';
import BgImageDark from '../assets/background-dark3.jpeg';
import { Container, useColorMode } from '@chakra-ui/react'

export const App = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    let currentBg = colorMode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`

    return (
        <>
        <Container 
            backgroundImage={currentBg}
            // style={{background: "linear-gradient(to bottom right, rgba(238,174,202,1), rgba(148,187,233,1));" }} 
            backgroundSize= "100% 100%" 
            maxWidth= "100%" >
        
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