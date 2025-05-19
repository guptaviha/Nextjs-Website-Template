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
    console.log('RootLayout');
    return (
        <html lang="en" suppressHydrationWarning>
            <Suspense>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <ChakraProvider theme={theme}>

                    <body suppressHydrationWarning>
                        {children}
                    </body>

                </ChakraProvider>
            </Suspense>
        </html>
    )
}
