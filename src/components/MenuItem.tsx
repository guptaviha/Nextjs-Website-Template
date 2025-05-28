import { Link, Text } from '@chakra-ui/react'

type MenuItemProps = {
    linkSrc: string;
    text: string;
    umamiEvent?:string;
};

export const MenuItem = ({ linkSrc, text, umamiEvent }:MenuItemProps ) => {

    return (
        <>
            <Link
                data-umami-event={umamiEvent}
                href={linkSrc}
                style={{ textDecoration: "none" }}>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontFamily="mosk-600"
                    _hover={{ transform: "scale(1.1)" }}
                    style={{ transition: "transform .5s ease-in-out" }}>
                    {text}
                </Text>
            </Link>
        </>
    );
};