import { useEffect, useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa"; // ← иконка Telegram
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
    }, 10000); // схлопывается через 10 сек
  };
  
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {!expanded ? (
        <button
          onClick={handleExpand}
          className="wave-button px-6 py-3 font-semibold uppercase tracking-wider bg-[#89f901] text-black rounded shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <span>Записаться</span>
        </button>
      ) : (
        <div className="mx-4 transition-all duration-500">
          <a
            href="https://t.me/your_bot_username"
            target="_blank"
            rel="noopener noreferrer"
            className="wave-button mr-4"
          >
            <div className="flex items-center gap-2">
              <FaTelegramPlane className="text-lg" />
              <span>Telegram</span>
            </div>
          </a>
          
          <a
            href="#contact"
            onClick={() => setExpanded(false)}
            className="wave-button"
          >
            <div className="flex items-center gap-2">
              {/* Прозрачная иконка для выравнивания */}
              <IoMailSharp className="text-lg" />
              <span>Обратная связь</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
