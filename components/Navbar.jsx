import { useState, useEffect } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(["home", "about", "profession", "training", "contact"], 100);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  
  const handleClose = () => setIsOpen(false);
  
  const linkClass = (id) =>
    `transition-colors hover:text-[#89f901] ${
      activeId === id ? "text-[#89f901] font-semibold" : "text-white"
    }`;
  
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Лого */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.webp" alt="Logo" priority width={45} height={45}/>
          <span className="font-bold text-white text-sm md:text-base uppercase">
            Школа разминирования
          </span>
        </div>
        
        {/* Десктоп-меню */}
        <div className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wider">
          <a href="#home" className={linkClass("home")}>Главная</a>
          <a href="#about" className={linkClass("about")}>О нас</a>
          <a href="#profession" className={linkClass("profession")}>Профессии</a>
          <a href="#training" className={linkClass("training")}>Где проходит</a>
          <a href="#contact" className={linkClass("contact")}>Контакты</a>
        </div>
        
        {/* Бургер */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-[2px] bg-white mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-[2px] bg-white mb-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <div className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>
      
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden z-40`}
        onClick={handleClose}
      />
      
      {/* Мобильное меню */}
      <div
        className={`fixed top-0 right-0 w-4/5 h-full bg-black shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start p-6 space-y-6 text-sm uppercase tracking-wider">
          <a onClick={handleClose} href="#home" className={linkClass("home")}>Главная</a>
          <a onClick={handleClose} href="#about" className={linkClass("about")}>О нас</a>
          <a onClick={handleClose} href="#profession" className={linkClass("profession")}>О профессии</a>
          <a onClick={handleClose} href="#training" className={linkClass("training")}>Где проходит</a>
          <a onClick={handleClose} href="#contact" className={linkClass("contact")}>Контакты</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;