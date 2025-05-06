import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VideoModal from "./elements/VideoModal";

export default function VideoCarousel({ videoIds }) {
  const [openId, setOpenId] = useState(null);
  const scrollRef = useRef(null);
  const hoverRef = useRef(false);
  const intervalRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollBy = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };
  
  const scrollToIndex = (index) => {
    const itemWidth = scrollRef.current.querySelector(".video-item")?.offsetWidth + 24;
    scrollRef.current.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setActiveIndex(index);
  };
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const itemWidth = scrollContainer.querySelector(".video-item")?.offsetWidth + 24;
    
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!hoverRef.current) {
          const nextIndex = (activeIndex + 1) % videoIds.length;
          scrollToIndex(nextIndex);
        }
      }, 5000);
    };
    
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, videoIds.length]);
  
  return (
    <section className="py-16 text-white text-center relative" id="videos">
      <h2 className="text-3xl font-bold mb-12">Видеообзор</h2>
      
      <div
        className="relative max-w-screen-xl mx-auto"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl text-white hover:scale-110 transition"
          onClick={() => {
            const prevIndex = (activeIndex - 1 + videoIds.length) % videoIds.length;
            scrollToIndex(prevIndex);
          }}
        >
          ❮
        </button>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 snap-x snap-mandatory no-scrollbar"
        >
          {videoIds.map((video, index) => (
            <motion.div
              key={video.videoid + index}
              className="video-item snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 cursor-pointer rounded-lg overflow-hidden relative group shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setOpenId(video.videoid)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoid}/hqdefault.jpg`}
                alt={video.videoid}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <svg
                    className="w-12 h-12 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8.64L15.27 12 10 15.36V8.64z" />
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl text-white hover:scale-110 transition"
          onClick={() => {
            const nextIndex = (activeIndex + 1) % videoIds.length;
            scrollToIndex(nextIndex);
          }}
        >
          ❯
        </button>
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        {videoIds.map((_, i) => (
          <span
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
      
      {openId && <VideoModal videoId={openId} onClose={() => setOpenId(null)} />}
    </section>
  );
}