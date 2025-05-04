const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-[#0d0d0d] text-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#0d0d0d] bg-opacity-50"></div>
      
      <div className="z-10 text-start px-4 max-w-3xl">
        <h1 className=" md:text-4xl text-2xl font-bold mb-4 tracking-tight">
          Получите профессию
          Сапер гуманитарного разминирования
        </h1>
        <ul className="text-xl flex ml-4 flex-col text-start text-gray-200">
          <li className="text-sm list-disc text-gray-300" >Вы научитесь поиску и разминированию взрывоопасных предметов любой сложности</li>
          <li className="text-sm list-disc text-gray-300" >Отработаете знания на практике в условиях, приближенных к реальным рабочим ситуациям</li>
          <li className="text-sm list-disc text-gray-300" >Сможете начать процедуру трудоустройства по специальности уже через 13 дней обучения</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;