import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github,Mail, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">We4Tech AI</h3>
            <p className="text-gray-400">
              Empowering businesses through innovative AI solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/We4TechAI" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/we4tech-ai" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/We4TechAI" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:we4tech10@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} We4Tech AI. All rights reserved.</p>
          <div className="bg-transparent">
  <p className='text-none' style={{ opacity: 0, position: 'absolute', height: 0, overflow: 'hidden' }}>
    1. Primary Keywords (Core AI Keywords) AI services AI development company Artificial intelligence solutions AI software development Machine learning services AI-powered automation 2. Long-Tail Keywords (Specific & High-Intent Keywords) Custom AI solutions for businesses AI-powered chatbot development AI automation for small businesses Best AI tools for startups AI-driven data analysis services 3. Industry-Specific AI Keywords (Tailor these based on your target audience) AI in healthcare (e.g., AI-powered medical diagnosis) AI for e-commerce (e.g., AI-driven product recommendations) AI in finance (e.g., AI-based fraud detection software) AI for marketing (e.g., AI content generation tools) AI in customer service (e.g., AI chatbots for customer support) 4. LSI Keywords (Related Terms for Better SEO) Deep learning models NLP (Natural Language Processing) services AI-powered business automation AI data analysis tools AI SaaS solutions 5. Local SEO Keywords (If Targeting a Specific Region) AI development company in [Your City] AI services in [Your Country] Best AI startups in [Region] 6. Question-Based Keywords (For Blog & FAQ Optimization) What is AI as a service (AIaaS)? How does AI automation improve business? Best AI tools for business growth How to integrate AI into a website? 7. Competitor Keywords (For Competitive Edge) Alternative to OpenAI GPT Best AI software like ChatGPT Compare AI tools for business automation 8. Transactional Keywords (To Drive Conversions) Hire AI developers Buy AI chatbot services AI automation solutions for enterprises AI integration for websites
  </p>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;