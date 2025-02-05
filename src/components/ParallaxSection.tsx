import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  overlay?: boolean;
}

const ParallaxSection = ({ children, bgImage, overlay = true }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      
      // Apply the parallax effect
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax">
      {bgImage && (
        <div 
          ref={sectionRef}
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/60 z-[1]" />}
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;