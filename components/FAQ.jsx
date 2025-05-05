import {useState} from "react";
import {FaChevronDown} from "react-icons/fa";



const FAQ = ({articles}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (<section id="faq" className="bg-[#0d0d0d] text-white px-4 md:px-6 py-20">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
      <div className="space-y-4">
        {articles.map((article, index) => {
          const isOpen = index === openIndex;
          return (<div
            key={index}
            className={`border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? "bg-[#1a1a1a]" : "bg-transparent"}`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-start sm:items-center justify-between gap-4 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3 flex-grow overflow-hidden">
                <span className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${isOpen ? "bg-red-600" : "bg-[#89f901]"}`}></span>
                <span className="text-base font-medium break-words">
                    {article.question}
                  </span>
              </div>
              <FaChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  isOpen ? "rotate-180 text-[#89f901]" : "text-white"
                }`}
              />
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 px-6 pb-4 pt-2">{article.ansewer}</p>
            </div>
          </div>);
        })}
      </div>
    </div>
  </section>);
};

export default FAQ;