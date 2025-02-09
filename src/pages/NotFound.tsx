import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="text-blue-400 hover:text-blue-600 underline transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
