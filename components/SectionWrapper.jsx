import { useRef } from 'react';
import useInView from '../hooks/useInView';

const SectionWrapper = ({ id, children, className = "" }) => {
  const ref = useRef();
  const isVisible = useInView(ref);
  
  const animationClass = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-12';
  
  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden min-h-screen bg-noise text-white px-4 md:px-6 py-20 transition-all duration-1000 ${animationClass} ${className}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* 💡 Засветы по бокам — через mix-blend */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute  inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-b from-transparent via-[#89f901]/40 to-transparent blur-[120px] opacity-20 mix-blend-screen" />
        <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-b from-transparent via-[#89f901]/40 to-transparent blur-[120px] opacity-20 mix-blend-screen" />
      </div>
      
      {/* Контент */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;