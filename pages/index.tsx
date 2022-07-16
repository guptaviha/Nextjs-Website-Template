import * as React from 'react';
import Container from '@mui/material/Container';
import { Landing } from '../src/components/Landing';
import { About } from '../src/components/About';
import { Portfolio } from '../src/components/Portfolio';
import { Toolbox } from '../src/components/Toolbox';
import BgImage from '../src/assets/background.jpeg';
import type { NextPage } from 'next';

const App: NextPage = () => {

  return (
    <Container sx={{ backgroundImage: `url(${BgImage.src})`, backgroundSize: "100% 100%", maxWidth:"100%" }}>

      <Landing />
      <hr></hr>
      <About />
      <hr></hr>
      <Portfolio />
      <hr></hr>
      <Toolbox />
      <hr></hr>

    </Container>
  );
};

export default App;