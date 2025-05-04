import { useEffect, useRef, useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 5000);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);
  
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://t.me/oisb_school_bot"
        className="wave-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Записаться</span>
      </a>
    </div>
  );
};

export default ScrollButton;
