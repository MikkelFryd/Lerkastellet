import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { ContactLayout } from "./ContactLayout";
import { GalleryLayout } from "./GalleryLayout";
import { WelcomeLayout } from "./WelcomeLayout";
import { SkipNavContent } from "@chakra-ui/skip-nav";

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main style={{ width: "90%", margin: "auto" }}>
        <SkipNavContent />
        <WelcomeLayout />
        <GalleryLayout />
        <ContactLayout />
      </main>
      <Footer />
    </>
  );
};
