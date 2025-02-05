import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Brain, Database, LineChart, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary" aria-hidden="true" />,
      title: "AI Consulting",
      description: "Expert guidance on implementing AI solutions in your business",
      features: ["Strategy Development", "Technology Assessment", "Implementation Planning"]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" aria-hidden="true" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your specific needs",
      features: ["Data Analysis", "Model Training", "Performance Optimization"]
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary" aria-hidden="true" />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Monitoring"]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" aria-hidden="true" />,
      title: "AI Security",
      description: "Protect your AI systems and data",
      features: ["Security Audits", "Threat Detection", "Compliance Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7">
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive AI solutions to transform your business
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex justify-center">
                  <span className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex}
                      className="text-muted-foreground flex items-center text-sm"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how our AI solutions can drive your business forward
          </p>
          <Button 
            size="lg" 
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/contact')}
            aria-label="Contact We4Tech AI"
          >
            Get Started
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

export default Services;