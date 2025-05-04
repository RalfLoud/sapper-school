import { useEffect, useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef();
  const collapseTimer = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
      setExpanded(false);
      clearTimeout(timeoutRef.current);
      clearTimeout(collapseTimer.current);
      
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 5000);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
      clearTimeout(collapseTimer.current);
    };
  }, []);
  
  const handleExpand = () => {
    setExpanded(true);
    clearTimeout(collapseTimer.current);
    collapseTimer.current = setTimeout(() => {
      setExpanded(false);
    }, 10000); // 10 сек
  };
  
  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {!expanded && (
        <button
          onClick={handleExpand}
          className="wave-button text-sm px-4 py-2 md:px-6 md:py-3 md:text-base"
        >
          <span>Записаться</span>
        </button>
      )}
      
      {/* Кнопки раскрываются с анимацией */}
      <div
        className={`grid gap-2 mt-2 transition-all duration-500 ease-out origin-bottom-right transform ${
          expanded ? "scale-100 opacity-100 max-h-[500px]" : "scale-95 opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <a
          href="https://t.me/oisb_school_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="wave-button text-sm px-4 py-2 md:px-6 md:py-3 md:text-base"
        >
          <div className="flex items-center gap-2">
            <FaTelegramPlane className="text-base md:text-lg" />
            <span>Telegram</span>
          </div>
        </a>
        
        <a
          href="#contact"
          onClick={() => setExpanded(false)}
          className="wave-button text-sm px-4 py-2 md:px-6 md:py-3 md:text-base"
        >
          <div className="flex items-center gap-2">
            <IoMailSharp className="text-base md:text-lg" />
            <span>Обратная связь</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ScrollButton;