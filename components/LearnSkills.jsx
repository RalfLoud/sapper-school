import SectionWrapper from "./SectionWrapper";

const skills = [
  "поиск, извлечение и уничтожение взрывоопасных предметов",
  "разминирование местности, объектов и инженерных сооружений",
  "работа с миноискателями и робототехническими комплексами",
  "определение, классификация, безопасное извлечение и транспортировка мин и ВОП",
  "соблюдение мер безопасности при разминировании",
  "оказание первой помощи пострадавшим при работе",
];

const images = [
  "/images/training1.jpeg",
  "/images/training2.jpeg",
  "/images/training3.jpeg",
  "/images/training4.jpeg",
  "/images/training5.jpeg",
  "/images/training6.jpeg",
  "/images/training7.jpeg",
  "/images/training8.jpeg",
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`training-${i + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-all rounded shadow-md"
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatYouLearn;