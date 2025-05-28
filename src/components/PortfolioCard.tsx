import { Box, Link, Image } from '@chakra-ui/react'

export const PortfolioCard = ({cardBg, link_src, img_src, title, desc}) => {

    return (
        <>
            <Link
                href={link_src}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}>
                <Box
                    maxW={{ base: 'sm', md: 'xl' }}
                    borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                    bg={cardBg}
                    shadow={"xl"}
                    _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                    <Image
                        src={img_src} />
                    <hr></hr>
                    <Box p='6'>
                        <Box
                            mt='1'
                            fontFamily="mosk-700"
                            as='h3'
                            lineHeight='tight'
                            noOfLines={1}>
                            {title}
                        </Box>
                        <Box
                            as='span'
                            fontSize='sm'>
                            {desc}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </>
    );
};