import { Link, Box,  } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';

export const BlogCard = ({ slug, cardBg, date, title, desc, pinned }) => {

    return (
        <>
            <Link
                key={slug}
                href={`/blog/${slug}`}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
            >
                <Box
                    position="relative"
                    maxW={{ base: 'sm', md: 'xl' }}
                    borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                    bg={cardBg}
                    shadow={"xl"}
                    _hover={{ boxShadow: "2xl", cursor: "pointer" }}
                >
                    { pinned && <StarIcon
                        color="yellow.400"
                        boxSize={4}
                        position="absolute"
                        top={6}
                        right={6}
                        zIndex={1}
                    /> }

                    <Box p='6'>
                        <Box
                            as='span'
                            fontSize='sm'>
                            {date}
                        </Box>
                        <Box
                            mt='1'
                            fontFamily="mosk-700"
                            as='h3'
                            lineHeight='tight'
                            noOfLines={1}>
                            {title}
                        </Box>
                        <Box
                            as='h6'
                            fontSize='md'
                            noOfLines={2}>
                            {desc}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </>
    );
};