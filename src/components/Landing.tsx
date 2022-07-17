import * as React from 'react';
import { Box, IconButton, Typography, Avatar, Stack, Zoom, Link } from '@mui/material';
import { BiSun, BiMoon } from 'react-icons/bi';
import AvatarImage from '../../src/assets/avatar.png';

type LandingProps = {
    mode: string;
    setMode;
};

export const Landing = (props: LandingProps) => {

    const { mode, setMode } = props;

    return (
        <>

            <Box px="220px" pt="30px" id="Landing">
                <Stack direction="row" spacing={8} >

                    <Link href="#Landing" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "transform .5s ease-in-out" }} >Home</Typography>
                    </Link>

                    <Link href="#About" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "transform .5s ease-in-out" }}>About</Typography>
                    </Link>

                    <Link href="#Portfolio" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "transform .5s ease-in-out" }}>Portfolio</Typography>
                    </Link>

                    <Link href="#Toolbox" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "transform .5s ease-in-out" }}>Toolbox</Typography>
                    </Link>

                    <Link href="https://drive.google.com/file/d/1rSQnWD5ALtBDj2-x0GHApMcHRIgeXgw1/view?usp=sharing" target="_blank" underline="none" color="unset" rel="noopener">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "transform .5s ease-in-out" }}>Resume</Typography>
                    </Link>

                    <IconButton sx={{ ml: 1, top: -6 }} onClick={() => setMode((mode === 'light' ? 'dark' : 'light'))} color="inherit">
                        {mode === 'dark' ? <BiSun /> : <BiMoon />}
                    </IconButton>

                </Stack>
            </Box>

            <Box px="200px" pt="160px" pb="200px">

                <Stack direction="row" spacing={2}>
                    <Zoom in={true}>
                        <Box pl="0px" pt="30px" pr="40px">
                            <Typography variant="h3" pl="40px">👋🏽 Hi, I'm Viha!</Typography>
                            <br></br>
                            {/* <Typography variant="subtitle2">Self-proclaimed stackoverflow copy-n-paste expert</Typography> */}
                            <Typography variant="h6">Your friendly neighborhood Software Developer</Typography>
                            {/* <Typography variant="subtitle2">Coder by day. Curious by night. Sleepless the day after.</Typography> */}
                            {/* <br></br> */}

                            {/* <Typography variant="h6">and stackoverflow copy-n-paste expert 👩🏾‍💻</Typography> */}
                            <Typography variant="h6">and part-time ukulele enthusiast 🎵</Typography>
                            {/* <Typography variant="h6">and figure skating novice ⛸</Typography> */}
                            {/* <Typography variant="h6">and Wikipedia rabbit-hole victim 📗</Typography> */}
                            {/* <Typography variant="h6">and nature documentary nerd 🌎</Typography> */}
                            {/* <Typography variant="h6">and ardent TraderJoes explorer 🛒</Typography> */}
                            {/* <Typography variant="h6">and occaional painting dilettante 🎨</Typography> */}

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