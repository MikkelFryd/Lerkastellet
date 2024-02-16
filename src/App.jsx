import { SkipNavLink } from "@chakra-ui/skip-nav";
import { MainLayout } from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

function App() {


const theme = extendTheme()


  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <MainLayout />
    </ChakraProvider>
  );
}

export default App;
