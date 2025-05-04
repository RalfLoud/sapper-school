import SectionWrapper from './SectionWrapper';
import Divider from "@/components/elements/Divider";

const AboutProfession = () => {
  return (
    <SectionWrapper id="profession">
      {/* Инфо-блок */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-center text-gray-400 mb-12">
        <div>
          <div className="mb-1">Когда</div>
          <div className="text-white font-semibold">11 мая по 23 мая</div>
        </div>
        <div>
          <div className="mb-1">Длительность</div>
          <div className="text-white font-semibold">13 дней</div>
        </div>
        <div>
          <div className="mb-1">Формат</div>
          <div className="text-white font-semibold">Очно</div>
        </div>
        <div>
          <div className="mb-1">Документ</div>
          <div className="text-white font-semibold leading-snug">
            Государственного образца<br /> Министерства обороны РФ<br />(свидетельство)
          </div>
        </div>
      </div>
      <Divider/>
      {/* Основной текст */}
      <div className="max-w-4xl mt-4 mx-auto  px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">О профессии</h2>
        
        <p className="text-gray-300 text-lg mb-6">
          <span className="font-semibold text-white">Сапёр гуманитарного разминирования</span> — это специалист, который занимается
          обнаружением, идентификацией и работой с взрывоопасными предметами, оставшимися после военных действий, террористических актов или других чрезвычайных ситуаций.
        </p>
        
        <p className="text-gray-400 text-base mb-6 mx-auto">
          Благодаря их работе, люди могут вернуться к нормальной жизни, начать восстановление своих домов и инфраструктуры.
        </p>
        
        <p className="text-gray-400 text-base mb-6 mx-auto">
          Услуги сапёров гуманитарного разминирования обычно заказывают международные организации, правительства стран и частные компании, которые работают в опасных регионах или занимаются строительством.
        </p>
        
        <div className="mt-8 text-xl font-semibold text-[#89f901]">116 000 рублей</div>
        <p className="text-gray-500 text-lg">
          средняя зарплата сапёра гуманитарного разминирования по данным hh.ru
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AboutProfession;
