import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState("");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const sorted = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (sorted.length > 0) {
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -30% 0px`, // более точная реакция
        threshold: [0.2, 0.5, 0.8], // реагирует даже при частичном входе
      }
    );
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [sectionIds, offset]);
  
  return activeId;
}