import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const termsSections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using We4Tech AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily access and use our services for personal, non-commercial transitory viewing only."
    },
    {
      title: "3. Service Description",
      content: "We4Tech AI provides artificial intelligence and machine learning solutions. We reserve the right to modify or discontinue any service without notice."
    },
    {
      title: "4. Intellectual Property",
      content: "All content, features, and functionality are owned by We4Tech AI and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "We4Tech AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
    },
    {
      title: "6. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms."
    },
    {
      title: "7. Contact",
      content: "Questions about the Terms of Service should be sent to us at legal@we4tech.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { opacity: 0 },
          particles: {
            number: { 
              value: window.innerWidth < 768 ? 20 : 30,
              density: { enable: true, value_area: 800 } 
            },
            color: { value: "#ffffff" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          }
        }}
        className="absolute inset-0 -z-10"
      />
      
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334">
        <div className="min-h-[40vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-muted/20 shadow-lg space-y-8">
            {termsSections.map((section, index) => (
              <div 
                key={index}
                className="animate-fade-in p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gradient">{section.title}</h2>
                <p className="text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Need Clarification?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact our legal team for any questions about our terms
          </p>
          <Button 
            size="lg" 
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/contact')}
            aria-label="Contact We4Tech AI legal team"
          >
            Contact Legal Team
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .text-gradient {
          background: linear-gradient(45deg, #4F46E5 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default Terms;