import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { Suspense } from 'react';

export const metadata = {
    title: 'Rebus',
    description: 'Your daily puzzle fix',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <body >
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    )
}
