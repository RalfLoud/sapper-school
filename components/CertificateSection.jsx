import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const CertificateSection = () => {
  return (
    <SectionWrapper id="certificate">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Подтверждение ваших навыков</h2>
          <p className="text-gray-400 text-lg mb-4">
            Вы получите документ государственного образца Минобороны Российской Федерации
            (свидетельство), который станет <span className="text-white font-semibold">основным</span> аргументом
            для ваших работодателей.
          </p>
          <p className="text-gray-400 text-lg mb-4">
            "МПЦ ВИА ВС РФ" входит в состав <br />
            <span className="text-white font-semibold">Военно-инженерной ордена Кутузова академии</span> имени Героя
            Советского Союза генерал-лейтенанта инженерных войск Д.М. Карбышева.
          </p>
          <a
            href="/images/certificate.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-gray-700 hover:bg-gray-600 text-sm font-bold px-5 py-4 rounded transition"
          >
            ПОСМОТРЕТЬ СЕРТИФИКАТ
          </a>
        </div>
        
        <div className="flex h-full w-full relative justify-center">
          <Image
            src="/images/certificate.webp"
            alt="Сертификат"
            fill
            className="rounded object-cover shadow-lg max-w-full "
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificateSection;