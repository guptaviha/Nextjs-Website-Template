import * as React from 'react';
import Container from '@mui/material/Container';
import { Landing } from '../src/components/Landing';
import { About } from '../src/components/About';
import { Portfolio } from '../src/components/Portfolio';
import { Toolbox } from '../src/components/Toolbox';
import BgImageLight from '../src/assets/background-light.jpeg';
import BgImageDark from '../src/assets/background-dark.png';
import type { NextPage } from 'next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BiSun, BiMoon } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
// const theme = useTheme();
// const colorMode = React.useContext(ColorModeContext);

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

  const darkMode = theme.palette.mode === 'dark' ? { BgImageDark } : { BgImageLight } 

  return (
    <Container sx={{ backgroundImage: `url(${BgImageLight.src})`, backgroundSize: "100% 100%", maxWidth: "100%" }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>

          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <BiSun /> : <BiMoon />}
          </IconButton>
          
          <Landing />
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