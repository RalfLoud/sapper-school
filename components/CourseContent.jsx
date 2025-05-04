import SectionWrapper from "./SectionWrapper";

const content = [
  {
    day: "День 1",
    items: [
      "Приезд по вызову на обучение по адресу, указанному в вызове.",
      "Прием всех документов (по присланному вам списку), анкетирование.",
      "Подписание журналов №1 и №2 по мерам безопасности.",
      "Выдача и закрепление за курсантами приборов разминирования (минноискатель Альфрамин 5000).",
      "Отъезд в гостиницу, расселение, инструктаж, ужин.",
    ],
  },
  {
    day: "День 2",
    items: [
      "Инженерные боеприпасы: вид, тип, принадлежность и степень опасности.",
      "Гуманитарное разминирование. Основы.",
      "Технология работ на минном поле.",
      "Порядок работы со средствами поиска.",
      "Практическое занятие: изучение мер по технике безопасности.",
    ],
  },
  {
    day: "День 3",
    items: [
      "Противотанковые мины: общие сведения, назначение, устройство, основные ТТХ, порядок установки и обезвреживания ТМ.",
    ],
  },
  {
    day: "День 4",
    items: [
      "Практическое занятие на полигоне.",
    ],
  },
];

const CourseContent = () => {
  return (
    <SectionWrapper id="course">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Содержание курса</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto text-lg">
          Вас ждет обучение в условиях, приближенным к реальным задачам,
          поэтому в программе <span className="text-white font-semibold">минимум теории и максимум практики</span>.
        </p>
        
        <div className="space-y-8">
          {content.map(({ day, items }, i) => (
            <div key={i} className="bg-[#111] rounded-lg p-6 shadow border border-gray-800">
              <h3 className="text-xl font-semibold text-[#89f901] mb-3">{day}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm sm:text-base">
                {items.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CourseContent;
