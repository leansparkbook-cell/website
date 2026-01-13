import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import AboutSection from "./components/AboutSection";
import AttributesSection from "./components/AttributesSection";
import CanvasSection from "./components/CanvasSection";
import WhyNowSection from "./components/WhyNowSection";
import EndorsementsSection from "./components/EndorsementsSection";
import AuthorsSection from "./components/AuthorsSection";
import ContestsSection from "./components/ContestsSection";
import Footer from "./components/Footer";
import CursorSpark from "./components/CursorSpark";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <AttributesSection />
      <CanvasSection />
      <WhyNowSection />
      <EndorsementsSection />
      <AuthorsSection />
      <ContestsSection />
      <Footer />
    </main>
  );
}
