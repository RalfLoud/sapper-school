import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const logos = [
  { src: "/employers/1.jpg", alt: "Минобороны" },
  { src: "/employers/2.jpg", alt: "МЧС России" },
  { src: "/employers/3.jpg", alt: "Росгвардия" },
  { src: "/employers/4.jpg", alt: "Черноморнефтегаз" },
  { src: "/employers/5.png", alt: "ВАД" },
  { src: "/employers/6.webp", alt: "Газпром" },
  { src: "/employers/7.png", alt: "НИПИГАЗ" },
  { src: "/employers/8.jpg", alt: "Россети" },
  { src: "/employers/9.webp", alt: "Роснефть" },
  { src: "/employers/10.jpg", alt: "Транснефть" },
  { src: "/employers/11.png", alt: "ПИК" },
  { src: "/employers/12.png", alt: "ПИК" },
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
              <img
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
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