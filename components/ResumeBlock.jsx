import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const ResumeBlock = () => {
  return (
    <SectionWrapper id="resume" className="py-12" >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Ваше резюме после прохождения курса
      </h2>
      
      <div className="rounded-lg shadow-xl p-6 md:p-10 max-w-5xl mx-auto border-[1px] border-gray-400 bg-gray-600 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        {/* Аватарка */}
        <div className="flex-shrink-0">
          <img
            src="/resume/avatar.jpg" // Замени на свой путь
            alt="Аватар"
            className="rounded-full w-20 h-20"
          />
        </div>
        
        {/* Контент */}
        <div className="flex-1">
          <div className="flex justify-between items-start flex-col md:flex-row">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">
              Специалист гуманитарного разминирования <br />
              <span className="font-bold">(инженер-сапер)</span>
            </h3>
            <div className="text-right text-[#89f901] text-lg md:text-xl font-bold mt-2 md:mt-0">
              от 100 000 руб.
            </div>
          </div>
          
          {/* Навыки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <ul className="space-y-2 list-disc pl-4">
              <li>Пользоваться средствами поиска ВОП.</li>
              <li>
                Распознавать принадлежность взрывоопасных предметов, тип, состояние и способ установки.
              </li>
              <li>Удалять с места обнаруженные взрывоопасные предметы.</li>
            </ul>
            
            <ul className="space-y-2 list-disc pl-4">
              <li>
                Обслуживать средства поиска и готовить их к применению.
              </li>
              <li>
                Обозначать и очищать участки от ВОП в соответствии с требованиями.
              </li>
              <li>
                Повышать эффективность обследования территорий.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeBlock;