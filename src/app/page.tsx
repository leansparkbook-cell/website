import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import AboutSection from "./components/AboutSection";
import AuthorsSection from "./components/AuthorsSection";
import WhyNowSection from "./components/WhyNowSection";
import ContestsSection from "./components/ContestsSection";
import CursorSpark from "./components/CursorSpark";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <AuthorsSection />
      <WhyNowSection />
      <ContestsSection />
    </main>
  );
}
