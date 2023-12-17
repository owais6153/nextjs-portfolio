import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export const metadata = {
  title: "Portfolio - Owais Khan - Full Stack Developer",
  description:
    "With over 5 years in the web development trenches, I&lsquo;ve navigated the ever-evolving tech landscape with zeal. My journey has been marked by creating captivating front-end interfaces, architecting robust back-end infrastructures, and sprinkling a bit of magic into every line of code.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden ">
      <Navbar />
      <div className="container mt-24 mx-auto  px-[10px] md:px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
