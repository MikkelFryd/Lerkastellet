import { Link } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        backgroundColor: "beige",
        opacity: ".8",
        top: "0",
        left: "0",
        zIndex: "1",
        height: "3rem",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        gap: "2rem",
      }}
    >
      <Link href="#welcome">Velkommen</Link>
      <Link href="#gallery">Galleri</Link>
      <Link href="#contact">Kontakt</Link>
    </nav>
  );
};
