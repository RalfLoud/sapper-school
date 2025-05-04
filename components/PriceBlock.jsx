import SectionWrapper from "./SectionWrapper";

const PriceBlock = () => {
  return (
    <SectionWrapper id="price">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Стоимость обучения
      </h2>
      
      <div className="max-w-xl mx-auto rounded-lg shadow-lg overflow-hidden">
        {/* Верхняя часть */}
        <div className="text-center py-6 px-4 border-b border-gray-300">
          <div className="text-lg font-semibold">
            Одним платежом{" "}
            <span className="text-red-600 font-bold">с 10% скидкой</span>
          </div>
          <div className="text-4xl font-bold mt-4 mb-1">97 000 р.</div>
          <div className="text-sm text-gray-500 line-through">108 000 р.</div>
        </div>
        
        {/* Описание пакета */}
        <div className="px-6 py-6 space-y-2 text-sm md:text-base">
          <div className="font-bold">В стоимость входит:</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>трехразовое питание на 13 дней</li>
            <li>проживание в гостиничном номере на 13 дней</li>
            <li>трансфер к месту проведения обучения</li>
            <li>современные приборы для поиска ВОП (миниискатель)</li>
            <li>обучение на базе "МПЦ ВИА ВС РФ"</li>
            <li>
              документ государственного образца от "МПЦ ВИА ВС РФ"
            </li>
          </ul>
        </div>
        
        {/* Кнопка */}
        <div className="px-6 pb-6">
          <a
            href="#contact"
            className="block wave-button w-full text-center bg-[#89f901] text-black hover:scale-105 transition-colors font-semibold py-3 rounded"
          >
            ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PriceBlock;