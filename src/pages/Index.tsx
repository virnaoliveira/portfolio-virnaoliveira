import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CertificationsSection />
      <SkillsSection />
      <SuccessCasesSection />
      <PersonalSection />
      <ContactSection />
    </div>
  );
};

export default Index;
