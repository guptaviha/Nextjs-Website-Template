import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';

const INTRO = `Say hello to the next newest additon to your team. I'm Viha 
Gupta, a zealous Software Dev based in NYC. As a recent CS grad with prior 
work ex, I'm ready to dive head-first into changing the word one semicolon 
at a time. Give me a shot and let's rock the corporate world together.`

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export const About = () => {

    const [open, setOpen] = React.useState(false);

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

                        <Button variant="text" startIcon={<MdEmail />}
                            onClick={() => {
                                setOpen(true);
                                navigator.clipboard.writeText("vg2237@nyu.edu");
                            }}
                        >
                            vg2237@nyu.edu
                        </Button>
                        <Snackbar open={open}
                            autoHideDuration={2300} 
                            onClose={() => {
                                setOpen(false);
                            }}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            key={"bottom" + "center"}
                            TransitionComponent={Slide}
                        >
                            <Alert severity="success" sx={{ width: '100%' }} >
                                Copied to clipboard.
                            </Alert>
                        </Snackbar>

                    </Stack>

                </Box>
            </Box>
        </>
    );
};