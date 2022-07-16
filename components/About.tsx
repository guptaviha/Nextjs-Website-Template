import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const About = () => {

    const INTRO = `Say hello to the next newest additon to your team. I'm Viha 
Gupta, a zealous Software Dev based in NYC. As a recent CS grad with prior 
work ex, I'm ready to dive head-first into changing the word one semicolon 
at a time. Give me a shot and let's rock the corporate world together.`

    return (
        <>
            {/* About Me */}
            <Box p="200px" id="About">
                <Typography variant="h4">About Me</Typography>
                <br></br>
                <Typography variant="h6">{INTRO}</Typography>
                <br></br>
                <Box sx={{ px: 20, pt: 5 }}>
                    <Stack direction="row" spacing={6} >

                        <Link href="https://github.com/guptaviha/" underline="none" target="_blank" rel="noopener">
                            <IconButton color="primary" size="medium">
                                <AiFillGithub />
                            </IconButton>
                        </Link>

                        <Link href="https://www.linkedin.com/in/vihagupta/" underline="none" target="_blank" rel="noopener">
                            <IconButton color="primary" size="medium">
                                <AiFillLinkedin />
                            </IconButton>
                        </Link>

                        <Button variant="text" startIcon={<MdEmail />}>
                            vg2237@nyu.edu
                        </Button>

                    </Stack>

                </Box>
            </Box>
        </>
    );
};