import dynamic from "next/dynamic";
import Skeleton from "../components/Skeleton";
import Navbar from "@/components/Navbar";

// 🔄 Скелетоны:
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

// 🔄 Lazy load секций
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
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
      <Navbar/>
      <Hero />
      <About />
      <News />
      <VideoCarousel />
      <Contact />
    </>
  );
}