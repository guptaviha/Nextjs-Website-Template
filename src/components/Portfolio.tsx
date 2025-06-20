import * as React from 'react';
import LibreImage from '../../src/assets/libre.png';
import ElonButAIImage from '../../src/assets/elonButAI2.png';
import NYCBasics from '../../src/assets/NYCBasics.png';
import Rebus from '../../src/assets/rebus.png';
import DabbaDash from '../../src/assets/dabbadash.png';
import { Box, Text, Center, useColorMode, SimpleGrid } from '@chakra-ui/react'
import { PortfolioCard } from './PortfolioCard';

export const Portfolio = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    let cardBg = colorMode === 'dark' ? `gray.700` : `gray.50`

    return (
        <>
            {/* Portfolio */}
            <Center>
                <Box
                    px={{ base: '50px', md: '100px', lg: '200px' }}
                    pt={{ base: '100px', md: '150px', lg: '200px' }}
                    pb={{ base: '100px', md: '150px', lg: '200px' }}
                    id="Portfolio"
                    scrollSnapAlign="start">
                    <Text
                        fontSize="2xl"
                        fontFamily="mosk-800">
                        {"My Portfolio"}
                    </Text>
                    <br></br>
                    <Text
                        fontSize="xl"
                        fontFamily="mosk-400">
                        {"Check out some of my work."}
                    </Text>
                    <br></br>

                    <SimpleGrid
                        columns={3} columnGap="10" rowGap="10"
                        spacing={4} >

                        <PortfolioCard
                            cardBg={cardBg}
                            link_src={"https://www.dabbadashgame.com/"}
                            img_src={DabbaDash.src}
                            title={"Dabba Dash"}
                            desc={"A tile turning card game where you deliver dabbas to hungry customers."}
                        />

                        <PortfolioCard
                            cardBg={cardBg}
                            link_src={"https://rebus.games/"}
                            img_src={Rebus.src}
                            title={"Rebus"}
                            desc={"A daily puzzle where you guess the phrase from a picture."}
                        />

                        <PortfolioCard
                            cardBg={cardBg}
                            link_src={"https://libre-ink.vercel.app/"}
                            img_src={LibreImage.src}
                            title={"libre.ink"}
                            desc={"A uniquely instant anonymous blogging website. Everything you type lives in the URL."}
                        />

                        <PortfolioCard
                            cardBg={cardBg}
                            link_src={"https://twitter.com/ElonButAI"}
                            img_src={ElonButAIImage.src}
                            title={"elonButAI"}
                            desc={"A Twitter Bot account that posts AI-generated fake tweets as Elon Musk. Fine tuned on GPT2."}
                        />

                        <PortfolioCard
                            cardBg={cardBg}
                            link_src={"https://nycbasics5prod.ml/"}
                            img_src={NYCBasics.src}
                            title={"NYC Basics"}
                            desc={"A web-app that helps NYers find free basic amenities like water fountains, toilets, benches etc."}
                        />

                    </SimpleGrid>
                </Box>
            </Center>
        </>
    );
};










