import React from 'react'

// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { ColorModeScript, extendTheme } from '@chakra-ui/react'

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return 
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
