const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#0d0d0d] text-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#0d0d0d] bg-opacity-50"></div>
      
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Школа обучение саперов
        </h1>
        <p className="text-xl text-gray-200">
          Технологии, стратегия и действие.
        </p>
      </div>
    </section>
  );
};

export default Hero;