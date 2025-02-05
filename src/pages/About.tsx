import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import { Users, Target, Heart, Code, Github, AppWindowIcon, SquareEqualIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Users className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "Our Team",
      description: "Expert professionals dedicated to pushing the boundaries of AI technology"
    },
    {
      icon: <Target className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "Our Mission",
      description: "To make AI technology accessible and beneficial for businesses worldwide"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "Our Values",
      description: "Innovation, integrity, and excellence in everything we do"
    }
  ];

  const projects = [
    {
      icon: <Code className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "Infile Code Generator",
      description: "A Python package to generate code from natural language suggestions using the Groq API. ",
      link: "https://github.com/We4TechAI/code-generator"
    },
    {
      icon: <SquareEqualIcon className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "My Docker Image Generator",
      description: "An open-source python package that generates docker images from natural language prompts.",
      link: "https://github.com/We4TechAI/My-Docker-Image-Genarator"
    },
    {
      icon: <AppWindowIcon className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />,
      title: "Fake Dataset Creator",
      description: "This project is a web application built with Streamlit to generate fake datasets.Its Completely Open Source.",
      link: "https://github.com/We4TechAI/Fake-Dataset-Creator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158">
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              About We4Tech AI
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Leading the future of artificial intelligence and technological innovation
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex justify-center">
                  <span className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
                <p className="text-muted-foreground text-center">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gradient animate-fade-in">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, We4Tech AI has been at the forefront of artificial intelligence innovation.
                Our journey began with a simple mission: to make AI technology accessible and beneficial for
                businesses of all sizes.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible with AI, helping businesses
                transform their operations and achieve unprecedented growth through cutting-edge technology
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Projects Section */}
<section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
  <div className="container mx-auto max-w-7xl">
    <h2 className="text-3xl font-bold text-gradient text-center mb-12 animate-fade-in">
      Our Esteemed Open Source Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/10"
        >
          <div className="mb-4 flex justify-center">
            <span className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {project.icon}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
          <p className="text-muted-foreground text-center mb-4">{project.description}</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary/10 group-hover:border-primary/30"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              View on GitHub
            </Button>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>


      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how our innovative solutions can transform your business
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

export default About;