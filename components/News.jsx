import React from "react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import Divider from "@/components/elements/Divider";

const News = ({ news }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  
  const visibleNews = news.slice(0, visibleCount);
  const hasMore = visibleCount < news.length;
  return (
    <SectionWrapper id="news">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Новости</h2>
      
      <div className="flex flex-col gap-6 w-full">
        {visibleNews.map((item, i) => (
          <React.Fragment key={item.id || i}>
          <div
            className="flex flex-col md:flex-row bg-opacity-0 overflow-hidden"
          >
            <div className="w-full md:w-48 aspect-[4/5] relative shrink-0">
              {item.picture?.url && (
                <Image
                  src={`http://193.188.23.149:1337${item.picture.url}`}
                  alt={item.title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              )}
            </div>
            
            {/* Контент справа */}
            <div className="p-6 flex items-center mx-auto justify-center w-full md:w-auto">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-sm text-center">{item.description}</p>
              </div>
            </div>
          </div>
            {i !== visibleNews.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
      
      {/* Кнопка */}
      {hasMore && (
        <div className="mt-8 text-center pb-20">
          <button
            onClick={handleLoadMore}
            className="bg-gray-600 hover:bg-gray-800 text-black font-semibold px-6 py-2 hover:scale-105 rounded transition-all"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default News;