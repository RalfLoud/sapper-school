import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const logos = [
  { src: "/employers/1.webp", alt: "Минобороны" },
  { src: "/employers/2.webp", alt: "МЧС России" },
  { src: "/employers/3.webp", alt: "Росгвардия" },
  { src: "/employers/4.webp", alt: "Черноморнефтегаз" },
  { src: "/employers/5.webp", alt: "ВАД" },
  { src: "/employers/6.webp", alt: "Газпром" },
  { src: "/employers/7.webp", alt: "НИПИГАЗ" },
  { src: "/employers/8.webp", alt: "Россети" },
  { src: "/employers/9.webp", alt: "Роснефть" },
  { src: "/employers/10.webp", alt: "Транснефть" },
  { src: "/employers/11.webp", alt: "ПИК" },
  { src: "/employers/12.webp", alt: "ПИК" },
];

const EmployersSection = () => {
  return (
    <SectionWrapper id="employers" className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold mb-10">Где работают наши выпускники</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-px bg-gray-200">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white flex items-center justify-center p-4 aspect-square"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                quality={60}
                sizes="(max-width: 768px) 50vw, 160px"
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EmployersSection;