import { extendTheme } from '@chakra-ui/react'
import '@fontsource/katibeh';
import '@fontsource-variable/playfair-display';

const theme = extendTheme({
  fonts: {
    heading: `'Katibeh', system-ui`,
    body: `'Playfair Display Variable', sans-serif`,
  },
})

export default theme