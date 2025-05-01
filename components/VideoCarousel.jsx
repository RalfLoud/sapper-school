import { useRef } from "react";
import Slider from "react-slick";
import useInView from "../hooks/useInView";
import SectionWrapper from "./SectionWrapper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer border border-gray-700 bg-black p-3 text-white hover:bg-primary transition"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer border border-gray-700 bg-black p-3 text-white hover:bg-primary transition"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const VideoCarousel = () => {
  const playerRefs = useRef([]);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const videos = [
    "https://www.youtube.com/embed/rHxIMzprxX4",
    "https://www.youtube.com/embed/nxL9KQKgsLg",
    "https://www.youtube.com/embed/KBLAd7eLXdc",
    "https://www.youtube.com/embed/-R8j5p8IWdA",
    "https://www.youtube.com/embed/m2DI0I1lY-I",
  ];
  
  const handleMouseEnter = (index) => {
    const iframe = playerRefs.current[index];
    iframe?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };
  
  const handleMouseLeave = (index) => {
    const iframe = playerRefs.current[index];
    iframe?.contentWindow?.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  };
  
  return (
    <SectionWrapper id="videos">
      <h2 className="text-3xl font-bold mb-8">Видеообзор</h2>
      <div className="w-full">
        <Slider {...settings}>
          {videos.map((url, index) => (
            <div key={index} className="px-2">
              <div
                className="aspect-video border border-gray-700"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <iframe
                  ref={(el) => (playerRefs.current[index] = el)}
                  className="w-full h-full"
                  src={`${url}?enablejsapi=1&rel=0&modestbranding=1`}
                  title={`YouTube Video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default VideoCarousel;