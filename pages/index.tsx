import * as React from 'react';
import { App } from '../src/components/App';
import type { NextPage } from 'next';
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import theme from '../src/theme/theme';
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';

const Index: NextPage = () => {

  return (
    <Container>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Head>
          <title>Viha Gupta</title>
          <meta name="keywords" content="viha gupta"></meta>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
          <meta property="og:title" content="Viha Gupta" />
          <meta property="og:description" content="Welcome to my corner of the web!" />
          <meta property="og:image" content="https://i.ibb.co/s9vx1g5/og-image.png" />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
          <script type='module' src='index.tsx'></script>
        </Head>
        <App />
      </ChakraProvider>
    </Container >
  );
};

export default Index;



// import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
// import { App } from '../src/components/App';
// import { createRoot } from 'react-dom/client';
// import theme from '../src/theme/theme';
// import { Container } from '@chakra-ui/react'

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<>
//     <Container>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <ChakraProvider theme={theme}>
//           <App />
//       </ChakraProvider>
//     </Container >
// </>);
