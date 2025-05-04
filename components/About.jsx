import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl  font-bold mb-6">О нас</h2>
      <p className="text-gray-400 text-center text-lg max-w-3xl">
        Мы обучаем гуманитарному разминированию и доказали свою эффективность в ходе Специальной Военной Операции.
      </p>
    </SectionWrapper>
  );
};

export default About;