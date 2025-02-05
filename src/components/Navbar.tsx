import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "glass-morphism py-4" : "bg-transparent py-6",
        isOpen && "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center center">
          
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient"
            aria-label="We4Tech AI Home"
          >
          <div className="absolute  translate-y-[-50%] translate-x-[-30%] " >
            <img
              src="/logo.png"
              width={250}
              height={200}
              alt="We4Tech AI Logo"
              className="  contrast-100 saturate-200 brightness-200 filter invert drop-shadow-md cover padding-20"
            />
            </div>
          </Link>
         

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-gray-300 hover:text-white transition-colors relative",
                  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]",
                  "after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-full",
                  location.pathname === link.path && "text-white after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm",
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block py-2 px-4 text-gray-300 hover:text-white hover:bg-white/5",
                  "rounded-lg transition-colors duration-200",
                  location.pathname === link.path && "text-white bg-white/10"
                )}
                onClick={() => setIsOpen(false)}
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;