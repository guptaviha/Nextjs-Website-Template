import * as React from 'react';
import { App } from '../components/App';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import theme from '../theme/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import * as DATA from '../../data/data';
import Layout from './layout';



function Index(){

  return (
    <>
    {/* <Container> */}
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}> */}
        <Head>
          <title>{DATA.APP_TITLE}</title>
          <meta name="keywords" content={DATA.APP_TITLE}></meta>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
          <meta property="og:title" content={DATA.APP_TITLE} />
          <meta property="og:description" content={DATA.APP_DESC} />
          <meta property="og:image" content={DATA.OG_IMAGE_SRC} />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
        </Head>
        <App />
      {/* </ChakraProvider> */}
    {/* </Container > */}
    </>
  );
};

Index.getLayout = function getLayout(page) {
  console.log('Index.getLayout');
  return <Layout>{page}</Layout>;
};

export default Index;

