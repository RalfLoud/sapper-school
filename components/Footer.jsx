import { useRef } from 'react';
import useInView from '../hooks/useInView';

const Footer = () => {
  const ref = useRef();
  const isVisible = useInView(ref);
  
  return (
    <footer
      ref={ref}
      className={`relative min-h-[200px] bg-[#0d0d0d] text-gray-500 px-6 py-10 text-center border-t border-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      &copy; 2025 ОИСБ. Все права защищены.
    </footer>
  );
};

export default Footer;