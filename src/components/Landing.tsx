import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Zoom from '@mui/material/Zoom';
import Link from '@mui/material/Link';
// import Resume from '/../src/assets/CV_2022_Apr.pdf';

export const Landing = () => {

    return (
        <>
            {/* <Toolbar> */}
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

                    {/* <Link href={Resume} target = "_blank" underline="none" color="unset">
                        <Typography variant="h6" sx={{ ":hover": { transform: "scale(1.1)", }, transition: "all .5s ease-in-out" }}>Resume</Typography>
                    </Link> */}

                </Stack>
            </Box>
            {/* </Toolbar> */}

            {/* Landing Page */}
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
                        <Avatar src="../src/assets/avatar.png" sx={{ width: 200, height: 200 }} />
                    </Zoom>
                </Stack>
            </Box>
        </>
    );
};