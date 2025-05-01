import SectionWrapper from './SectionWrapper';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold mb-8">Связаться с нами</h2>
      <form className="space-y-6 w-full max-w-lg text-left">
        <input
          type="text"
          placeholder="Имя"
          className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
        
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        />
        
        <textarea
          placeholder="Сообщение"
          rows="4"
          className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        ></textarea>
        <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition">Отправить</button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;