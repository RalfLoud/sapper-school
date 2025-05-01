import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const activeId = useScrollSpy(["home", "about", "news", "videos", "contact"], 100);
  
  const linkClass = (id) =>
    `hover:text-primary transition ${
      activeId === id ? "text-primary font-semibold" : "text-white"
    }`;
  
  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d0d] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Лого + Текст */}
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Логотип"
            className="h-12 w-auto object-contain"
          />
          <span className="text-white text-sm md:text-base font-semibold tracking-wide uppercase">
            Инженерно-сапёрный батальон
          </span>
        </a>
        
        {/* Навигация */}
        <div className="space-x-4 md:space-x-6 text-sm font-medium uppercase tracking-wider">
          <a href="#home" className={linkClass("home")}>Главная</a>
          <a href="#about" className={linkClass("about")}>О нас</a>
          <a href="#news" className={linkClass("news")}>Новости</a>
          <a href="#videos" className={linkClass("videos")}>Видео</a>
          <a href="#contact" className={linkClass("contact")}>Контакты</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;