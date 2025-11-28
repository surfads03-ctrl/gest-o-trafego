import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { DiagnosisTool } from './components/DiagnosisTool';
import { ServiceSelector } from './components/ServiceSelector';
import { Methodology } from './components/Methodology';
import { LeadMagnet } from './components/LeadMagnet';
import { RoiCalculator } from './components/RoiCalculator';
import { Educational } from './components/Educational';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Image */}
          <img 
            src="https://nandosilvapro.site/wp-content/uploads/2025/07/logo-nando.png" 
            alt="NS Performance Logo" 
            className="h-12 w-auto rounded-xl"
          />
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a 
              href="#diagnosis" 
              onClick={(e) => scrollToSection(e, 'diagnosis')}
              className="hover:text-white transition-colors"
            >
              Diagnóstico
            </a>
            <a 
              href="#social-proof" 
              onClick={(e) => scrollToSection(e, 'social-proof')}
              className="hover:text-white transition-colors"
            >
              Cases
            </a>
            <a 
              href="#method" 
              onClick={(e) => scrollToSection(e, 'method')}
              className="hover:text-white transition-colors"
            >
              Método
            </a>
          </div>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2.5 bg-white text-slate-900 font-bold rounded-lg text-sm hover:bg-slate-200 transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <SocialProof />
        <DiagnosisTool />
        <ServiceSelector />
        <Methodology />
        <LeadMagnet />
        <RoiCalculator />
        <Educational />
        <Offer />
        <FAQ />
        <LeadForm />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5513991472036" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
};

export default App;