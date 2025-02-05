import { ArrowRight, Brain, Cpu, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParallaxSection from "@/components/ParallaxSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";


const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "Advanced AI Solutions",
    description: "Cutting-edge artificial intelligence solutions tailored to your business needs.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "Machine Learning",
    description: "Powerful machine learning algorithms that adapt and improve over time.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "Global Reach",
    description: "Serving clients worldwide with scalable AI solutions.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "Fast Implementation",
    description: "Quick deployment and integration with your existing systems.",
  },
];

const Index = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Particles
        id="tsparticles"
        options={{
          background: { opacity: 0 },
          particles: {
            number: {
              value: typeof window !== "undefined" && window.innerWidth < 768 ? 20 : 30,
              density: { enable: true, value_area: 800 },
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
              outModes: { default: "out" },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <Navbar />

      {/* Hero Section */}
      <ParallaxSection>
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2w3bWRodHozNjQ5OWg3NWJvYmhwdWlzeWp0aDhmMHI2YXFyaTY0dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7VzgMsB6FLCilwS30v/giphy.gif"
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full opacity-35"
        />
      
        <div className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              Transforming Business Through AI Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Empowering your business with next-generation artificial intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="text-lg hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
                aria-label="Get started with We4Tech AI"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg hover:scale-105 transition-transform"
                onClick={() => navigate("/about")}
                aria-label="Learn more about We4Tech AI"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Why Choose We4Tech AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex justify-center">
                  <span className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Join the AI revolution and stay ahead of the competition with our cutting-edge solutions.
            </p>
            <Button size="lg" className="text-lg hover:scale-105 transition-transform" onClick={() => navigate("/contact")} aria-label="Contact We4Tech AI">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
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

export default Index;
