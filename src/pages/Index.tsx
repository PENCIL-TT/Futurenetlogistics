import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GlobalNetwork from '@/components/GlobalNetwork';
import ServicesSection from '@/components/ServicesSection';
import VisionMission from '@/components/VisionMission';
import CoreValues from '@/components/CoreValues';
import ValuePropositions from '@/components/ValuePropositions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <VisionMission />
        <CoreValues />
        <ValuePropositions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
