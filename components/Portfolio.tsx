import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

export const Portfolio = () => {

    return (
        <>
            {/* Portfolio */}
            <Box p="200px" id="Portfolio">

                <Typography variant="h4"> My Portfolio</Typography>
                <br></br>
                <Typography variant="h6">Check out some of my work.</Typography>
                <br></br>

                <Stack direction="row" spacing={4} >

                    <Link href="https://libre.ink" underline="none" target="_blank" rel="noopener">
                        <Card variant="outlined"
                            sx={{
                                ':hover': {
                                    boxShadow: 20
                                },
                                width: 320,
                                boxShadow: 2
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt="libre.ink screenshot"
                                height="100%"
                                image="../assets/libre.ink.png"
                            />
                            <CardContent>
                                <Typography variant="h6" color="text.primary" align="center">
                                    libre.ink
                                </Typography>
                                <hr></hr>
                                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                    A uniquely instant anonymous blogging website. Everything you type lives in the URL.
                                </Typography>

                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="https://twitter.com/ElonButAI" underline="none" target="_blank" rel="noopener">
                        <Card variant="outlined"
                            sx={{
                                ':hover': {
                                    boxShadow: 20
                                },
                                width: 320,
                                boxShadow: 2
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" color="text.primary" align="center">
                                    elonButAI
                                </Typography>
                                <hr></hr>
                                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                    A Twitter Bot account that posts AI-generated fake tweets as Elon Musk. Fine tuned on GPT2.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Stack>

            </Box>
        </>
    );
};










