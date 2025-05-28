import { Box, Center, Image, Text } from '@chakra-ui/react'

export const ToolboxItem = ({ img_src, label }) => {

    return (
        <>
            <Box>
                <Image
                    src={img_src}
                    width={{ base: '60px', md: '70px', lg: '70px' }}
                    height={{ base: '60px', md: '70px', lg: '70px' }}
                />
                <Center>
                    <Text fontFamily="mosk-500" >
                        {label}
                    </Text>
                </Center>
            </Box>
        </>
    );
};