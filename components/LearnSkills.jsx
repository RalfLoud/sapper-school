import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const skills = [
  "поиск, извлечение и уничтожение взрывоопасных предметов",
  "разминирование местности, объектов и инженерных сооружений",
  "работа с миноискателями и робототехническими комплексами",
  "определение, классификация, безопасное извлечение и транспортировка мин и ВОП",
  "соблюдение мер безопасности при разминировании",
  "оказание первой помощи пострадавшим при работе",
];

const images = [
  "/images/training1.webp",
  "/images/training2.webp",
  "/images/training3.webp",
  "/images/training4.webp",
  "/images/training5.webp",
  "/images/training6.webp",
  "/images/training7.webp",
  "/images/training8.webp",
];

const WhatYouLearn = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Чему вы научитесь</h2>
      
      <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-gray-300 text-base mb-12 px-4">
        {skills.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#89f901] text-xl">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={src}
                alt={`training-${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatYouLearn;