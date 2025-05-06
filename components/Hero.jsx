import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white flex items-center justify-center min-h-[600px] md:min-h-screen overflow-hidden"
    >
      {/* Фон */}
      <Image
        src="/hero-bg.webp"
        alt="Фон Сапёрной школы"
        fill
        priority
        quality={75}
        className="object-cover"
      />
      
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Контент */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4 md:px-6 py-24 md:py-36 max-w-3xl text-start"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-snug">
          Получите профессию <br />
          Сапёр гуманитарного разминирования
        </h1>
        
        <ul className="text-sm sm:text-base md:text-lg ml-4 flex flex-col gap-2 text-gray-200 list-disc">
          <li>Вы научитесь поиску и разминированию взрывоопасных предметов любой сложности</li>
          <li>Отработаете знания на практике в условиях, приближенных к реальным рабочим ситуациям</li>
          <li>Сможете начать процедуру трудоустройства по специальности уже через 13 дней обучения</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Hero;