import SectionWrapper from './SectionWrapper';

const News = () => {
  const items = [
    { title: 'Новая система разведки', date: '2025-04-30', image: '/news/1.jpeg' },
    { title: 'Обновление дрон-платформы', date: '2025-04-10', image: '/news/2.jpeg' },
    { title: 'ИИ в боевых операциях', date: '2025-03-22', image: '/news/3.jpeg' },
  ];
  
  return (
    <SectionWrapper id="news">
      <h2 className="text-3xl font-bold mb-8">Новости</h2>
      <div className="grid gap-6 md:grid-cols-3 w-full ">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-700 bg-[#0d0d0d] hover:scale-[1.03] hover:shadow-xl transition-all">
            <div className="aspect-video overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default News;