import { Heading } from "@chakra-ui/react";
import bg from "../assets/images/ceramics.webp";

export const Header = () => {
  return (
    <header style={{ height: "60vh", width: "100%", position: "relative" }}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: "30px", md: "20px", lg: "92px" }}
        style={{ translate: "0% 15vh" }}
      >
        LERKASTELLET
      </Heading>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "60vh",
          margin: "auto",
          backgroundImage: "url(" + bg + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "blur(3px)",
          zIndex: "-1",
          top: "0"
        }}
      />
    </header>
  );
};
