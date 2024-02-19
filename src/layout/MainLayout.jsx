import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { ContactLayout } from "./ContactLayout";
import { GalleryLayout } from "./GalleryLayout";
import { WelcomeLayout } from "./WelcomeLayout";
import { SkipNavContent } from "@chakra-ui/skip-nav";

export const MainLayout = () => {
  return (
    <div style={{backgroundColor: "#CBB9B1", zIndex: "0", position: "relative"}}>
      <NavBar />
      <Header />
      <main style={{ width: "80%", margin: "auto", boxShadow: "0px 8px 8px 2px black" }}>
        <SkipNavContent />
        <WelcomeLayout />
        <GalleryLayout />
        <ContactLayout />
      </main>
      <Footer />
    </div>
  );
};
