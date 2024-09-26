import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MainTextSection from "./components/MainTextSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main>
      <MainTextSection/>
      <AboutSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
