import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is We4Tech AI?",
      answer: "We4Tech AI is a leading provider of artificial intelligence and machine learning solutions for businesses. We help companies leverage AI technology to improve their operations, increase efficiency, and drive growth."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can benefit your business in numerous ways, including automation of repetitive tasks, data analysis for better decision-making, improved customer service through chatbots, and predictive analytics for business forecasting."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our AI solutions are customizable to meet the specific needs of different sectors."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation time varies depending on the complexity of the solution and your business needs. Typically, our projects range from a few weeks for basic implementations to several months for more complex solutions."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including initial consultation, implementation assistance, training, and ongoing technical support. Our team is available to help you maximize the benefits of our AI solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5">
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-fade-in">
              FAQ
            </h1>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Frequently Asked Questions about We4Tech AI
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group bg-background/80 backdrop-blur-sm rounded-xl border border-muted/20 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative isolate py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact our team for more information about our AI solutions
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

export default FAQ;