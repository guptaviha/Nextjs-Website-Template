import * as React from 'react';
import Container from '@mui/material/Container';
import { Landing } from '../components/Landing';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Toolbox } from '../components/Toolbox';
import BgImage from '../assets/background.jpeg';
import type { NextPage } from 'next';

const App: NextPage = () => {

  return (
    <Container sx={{ backgroundImage: `url(${BgImage.src})`, backgroundSize: "100% 100%", }}>

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