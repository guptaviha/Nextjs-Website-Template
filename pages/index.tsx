import * as React from 'react';
import { App } from '../src/components/App';
import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react'
import theme from '../src/theme/theme';
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';

const Index: NextPage = () => {

  return (
    <Container>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </Container >
  );
};

export default Index;