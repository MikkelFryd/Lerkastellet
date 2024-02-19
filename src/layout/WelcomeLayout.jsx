import { Box, Container, Heading, Text, theme } from "@chakra-ui/react";

export const WelcomeLayout = () => {
  return (
    <Container id="welcome" maxW="100vw" minH="80vh" bg="#75655f" color="white">
      <Heading
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
        as="h2"
        p={"1em"}
        fontWeight={"300"}
      >
        VELKOMMEN
      </Heading>
      <Box
        style={{ translate: "0% 10vh" }}
        w={"60%"}
        m={"2em auto"}
        border={"2px solid white"}
        p={"1em"}
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
      >
        <Text fontFamily={theme.fonts.body} fontSize={{ base: "10px", md: "20px", lg: "24px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat
          rem repudiandae odio repellendus id quos incidunt sunt provident
          officiis ad, nisi dolores vel doloribus voluptates pariatur. Incidunt,
          quibusdam minima!
        </Text>
        <Text fontSize={{ base: "10px", md: "20px", lg: "24px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat
          rem repudiandae odio repellendus id quos incidunt sunt provident
          officiis ad, nisi dolores vel doloribus voluptates pariatur. Incidunt,
          quibusdam minima!
        </Text>
      </Box>
    </Container>
  );
};
