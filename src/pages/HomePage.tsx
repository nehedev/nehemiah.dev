import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ToolboxSection from '../components/sections/ToolboxSection';
import WritingSection from '../components/sections/WritingSection';
import PortfolioLayout from '../layouts/PortfolioLayout';

function HomePage() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ToolboxSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />
    </PortfolioLayout>
  );
}

export default HomePage;