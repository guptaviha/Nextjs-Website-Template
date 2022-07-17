import * as React from 'react';
import { Container, Paper, Button } from '@mui/material';
import { Landing } from '../src/components/Landing';
import { About } from '../src/components/About';
import { Portfolio } from '../src/components/Portfolio';
import { Toolbox } from '../src/components/Toolbox';
import BgImageLight from '../src/assets/background-light.jpeg';
import BgImageDark from '../src/assets/background-dark2.png';
import type { NextPage } from 'next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BiSun, BiMoon } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import CssBaseline from "@mui/material/CssBaseline";


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App: NextPage = () => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  let src=theme.palette.mode === 'dark' ? `url(${BgImageDark.src})` : `url(${BgImageLight.src})`
  // let src=`url(${BgImageLight.src})`

  return (
    <Container sx={{ backgroundImage: src, backgroundSize: "100% 100%", maxWidth: "100%", transition: "all .5s ease-in-out" }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />

          {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <BiSun /> : <BiMoon />}
          </IconButton> */}

          <Landing mode={mode} setMode={setMode} />
          <hr></hr>
          <About />
          <hr></hr>
          <Portfolio />
          <hr></hr>
          <Toolbox />
          <hr></hr>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </Container >
  );
};

export default App;