import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Skeleton from "../components/Skeleton";
import ScrollButton from "@/components/ScrollButton";

// ⏳ Скелетоны
const AboutProfessionSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 space-y-4">
    <Skeleton height="h-8" width="w-2/3" />
    <Skeleton height="h-5" width="w-full" />
    <Skeleton height="h-5" width="w-5/6" />
    <Skeleton height="h-5" width="w-4/6" />
    <Skeleton height="h-6" width="w-40" className="mt-4" />
  </div>
);

const NewsSkeleton = () => (
  <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-[#111] p-6 rounded shadow">
        <Skeleton height="h-48" />
        <Skeleton height="h-6" width="w-1/3" className="mt-4" />
        <Skeleton height="h-4" width="w-2/3" className="mt-2" />
      </div>
    ))}
  </div>
);

const VideoSkeleton = () => (
  <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="aspect-video bg-gray-700 animate-pulse rounded" />
    ))}
  </div>
);

const ContactSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
    <Skeleton height="h-10" width="w-3/4" />
    <Skeleton height="h-10" width="w-full" />
    <Skeleton height="h-32" width="w-full" />
    <Skeleton height="h-10" width="w-40" />
  </div>
);

// 🔄 Dynamic imports
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
const AboutProfession = dynamic(() => import("../components/AboutProfession"), {
  ssr: false,
  loading: () => <AboutProfessionSkeleton />,
});
const News = dynamic(() => import("../components/News"), {
  ssr: false,
  loading: () => <NewsSkeleton />,
});
const VideoCarousel = dynamic(() => import("../components/VideoCarousel"), {
  ssr: false,
  loading: () => <VideoSkeleton />,
});
const Contact = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
  loading: () => <ContactSkeleton />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutProfession />
      <News />
      {/*<VideoCarousel />*/}
      <Contact />
      <ScrollButton/>
    </>
  );
}