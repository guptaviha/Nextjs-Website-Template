import * as React from 'react';
import { Box, IconButton, Typography, Avatar, Stack, Zoom, Link } from '@mui/material';
import { BiSun, BiMoon } from 'react-icons/bi';
import AvatarImage from '../../src/assets/avatar.png';

type LandingProps = {
    mode: string;
    setMode: (mode: string) => void;
};

export const Landing = (props: LandingProps) => {

    const { mode, setMode } = props;

    return (
        <>

            <Box px="260px" pt="30px" id="Landing">
                <Stack direction="row" spacing={8} >

                    <Link href="#Landing" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }} >Home</Typography>
                    </Link>

                    <Link href="#About" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }}>About</Typography>
                    </Link>

                    <Link href="#Portfolio" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }}>Portfolio</Typography>
                    </Link>

                    <Link href="#Toolbox" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }}>Toolbox</Typography>
                    </Link>

                    <Link href="https://drive.google.com/file/d/1rSQnWD5ALtBDj2-x0GHApMcHRIgeXgw1/view?usp=sharing" target="_blank" underline="none" color="unset" rel="noopener">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }}>Resume</Typography>
                    </Link>

                    <IconButton sx={{ ml: 1, top: -6 }} onClick={() => setMode((mode === 'light' ? 'dark' : 'light'))} color="inherit">
                        {mode === 'dark' ? <BiSun /> : <BiMoon />}
                    </IconButton>

                </Stack>
            </Box>

            <Box p="160px">

                <Stack direction="row" spacing={10}>
                    <Zoom in={true}>
                        <Box p="80px">
                            <Typography variant="h3">👋🏽 Hi, I'm Viha!</Typography>
                            <br></br>
                            {/* <Typography variant="subtitle2">Self-proclaimed stackoverflow copy-n-paste expert</Typography> */}
                            <Typography variant="subtitle2">Your friendly neighborhood Software Developer</Typography>
                            {/* <Typography variant="subtitle2">Coder by day. Curious by night. Sleepless the day after.</Typography> */}
                        </Box>
                    </Zoom>

                    <Zoom in={true}>
                        <Avatar src={AvatarImage.src} sx={{ width: 200, height: 200 }} />
                    </Zoom>

                </Stack>
            </Box>

        </>
    );
};