import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Introduction",
      content: (
        <p className="text-muted-foreground">
          At We4Tech AI, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      )
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Name and contact information</li>
            <li>Company information</li>
            <li>Usage data and preferences</li>
            <li>Communication history</li>
          </ul>
        </>
      )
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Communicate with you</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      title: "Data Security",
      content: (
        <p className="text-muted-foreground">
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      )
    },
    {
      title: "Contact Us",
      content: (
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us at privacy@we4tech.ai
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334">
        <div className="min-h-[40vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              How we protect and handle your data
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-muted/20 shadow-lg space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Your Privacy Matters
          </h2>
          <p className="text-xl text-muted-foreground">
            We're committed to protecting your personal information and being transparent about our practices
          </p>
          <Button 
            size="lg" 
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/contact')}
            aria-label="Contact We4Tech AI"
          >
            Contact Us
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

export default Privacy;