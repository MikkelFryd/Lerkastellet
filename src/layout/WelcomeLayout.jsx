import { Box, Container, Heading, Text, } from "@chakra-ui/react";

export const WelcomeLayout = () => {
  return (
    <Container id="welcome" h={"80vh"} minH="80vh" width={"100%"} maxWidth={"100vw"} bg="#75655f" color="white" paddingBottom={"4em"}>
      <Heading
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
        as="h2"
        p={"1em"}
        fontWeight={"300"}
      >
        VELKOMMEN
      </Heading>
      <Box
        w={"80%"}
        m={"2em auto"}
        border={"2px solid white"}
        borderInlineEnd={"none"}
        borderInlineStart={"none"}
        p={"1em"}
        display={"grid"}
        gap={"1em"}
        gridTemplateColumns={"1fr 1fr"}
      >
        <Text fontSize={{ base: "12px", md: "20px", lg: "24px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat
          rem repudiandae odio repellendus id quos incidunt sunt provident
          officiis ad, nisi dolores vel doloribus voluptates pariatur. Incidunt,
          quibusdam minima!
        </Text>
        <Text fontSize={{ base: "12px", md: "20px", lg: "24px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat
          rem repudiandae odio repellendus id quos incidunt sunt provident
          officiis ad, nisi dolores vel doloribus voluptates pariatur. Incidunt,
          quibusdam minima!
        </Text>
      </Box>
    </Container>
  );
};
