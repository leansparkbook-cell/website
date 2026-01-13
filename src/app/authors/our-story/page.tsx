import NavBar from "../../components/NavBar";
import StorySection from "../../components/StorySection";
import Footer from "../../components/Footer";
import CursorSpark from "../../components/CursorSpark";

export default function OurStoryPage() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      {/* Spacer for fixed navbar */}
      <div className="h-24" />
      <StorySection />
      <Footer />
    </main>
  );
}
