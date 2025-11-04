import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CursorSpark from "./components/CursorSpark";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
