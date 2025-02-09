import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f4f6" // Light gray color for the background
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,149.3C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Main Content */}
      <div className="text-center bg-background/80 backdrop-blur-sm p-12 rounded-xl border border-muted/20 shadow-lg z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-bounce">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/')}
            aria-label="Return to Home"
          >
            <Home className="w-5 h-5 mr-2" aria-hidden="true" />
            Return to Home
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg hover:scale-105 transition-transform"
            onClick={() => window.location.href = "mailto:support@we4tech.ai"}
            aria-label="Contact Support"
          >
            <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
            Contact Support
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Or email us at:{" "}
          <a
            href="mailto:support@we4tech.ai"
            className="text-primary hover:underline"
          >
            support@we4tech.ai
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
