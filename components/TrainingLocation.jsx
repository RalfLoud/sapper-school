import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const TrainingLocation = () => {
  return (
    <SectionWrapper id="training">
      <h2 className="text-3xl font-bold mb-6">Где проходит обучение</h2>
      
      <p className="text-gray-400 text-lg max-w-3xl mb-6">
        Вы будете обучаться на базе <strong className="text-white">Международного противоминного
        центра</strong> Военно-инженерной ордена Кутузова академии имени Героя Советского Союза генерал-лейтенанта
        инженерных войск Д.М. Карбышева.
      </p>
      
      <p className="text-gray-400 text-lg max-w-3xl mb-6">
        Это специализированное подразделение Инженерных войск Вооружённых Сил РФ, предназначенное для обеспечения
        участия России в международных программах, проектах и операциях по гуманитарному разминированию как на
        территории России, так и за её пределами.
      </p>
      
      <p className="text-gray-400 text-lg max-w-3xl mb-10">
        "МПЦ ВИА ВС РФ" имеет передовое отечественное вооружение и технику, специализированные аудитории, площадки и
        полигон, автопарк.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="rounded overflow-hidden shadow-md">
          <img
            src="/images/mpc1.webp"
            alt="Международный центр"
            // width={500}
            // height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md">
          <img
            src="/images/mpc2.jpeg"
            alt="Академия инженерных войск"
            // width={500}
            // height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TrainingLocation;