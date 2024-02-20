import { Heading, Link, SimpleGrid } from "@chakra-ui/react";
import { PiInstagramLogoThin, PiFacebookLogoThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#CBB9B1",
        color: "black",
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: "30% 10% 60%",
        alignItems: "center",
        minHeight: "10vh"
      }}
    >
      <Heading
        as="h2"
        style={{ padding: "1rem" }}
        fontSize={{ base: "18px", md: "40px", lg: "32px" }}
      >
        Find mig her
      </Heading>
      <SimpleGrid style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Link href="https://www.facebook.com/">
          <PiFacebookLogoThin style={{ width: "100%", height: "6vh" }} />
        </Link>
        <Link href="https://www.instagram.com">
          <PiInstagramLogoThin style={{ width: "100%", height: "6vh" }} />
        </Link>
      </SimpleGrid>
      <div>
        <Heading as="h3" fontSize={{ base: "12px", md: "40px", lg: "24px" }}>
          Dorte Møller keramik - 2023
        </Heading>
        <Heading as="h3" fontSize={{ base: "12px", md: "40px", lg: "24px" }}>
          DESIGN OG WEB - MIKKEL FRYDENSBERG
        </Heading>
      </div>
    </footer>
  );
};
