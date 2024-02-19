import { SkipNavLink } from "@chakra-ui/skip-nav";
import { MainLayout } from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme'

function App() {

  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <MainLayout/>
    </ChakraProvider>
  );
}

export default App;
