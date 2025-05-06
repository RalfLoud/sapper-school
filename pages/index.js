import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import TrainingLocation from "@/components/TrainingLocation";
import Skeleton from "@/components/Skeleton";
import News from "@/components/News";
import VideoCarousel from "@/components/VideoCarousel";

const Hero = dynamic(() => import("../components/Hero")); // в первом экране — лучше не lazy
const About = dynamic(() => import("../components/About"));

const AboutProfession = dynamic(() => import("../components/AboutProfession"), {
  ssr: false,
  loading: () => <Skeleton height="h-8" width="w-2/3" />,
});

const LearnSkills = dynamic(() => import("../components/LearnSkills"));
const CourseContent = dynamic(() => import("../components/CourseContent"));
const CertificateSection = dynamic(() => import("@/components/CertificateSection"));
const EmployersSection = dynamic(() => import("@/components/EmployersSection"));
const ResumeBlock = dynamic(() => import("@/components/ResumeBlock"));
const PriceBlock = dynamic(() => import("@/components/PriceBlock"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("../components/ContactForm"), {
  ssr: true,
  loading: () => <Skeleton height="h-60" width="w-full" />,
});

export async function getStaticProps() {
  const [res1, res2, res3, res4] = await Promise.all([
    fetch("http://193.188.23.149:1337/api/faqs2easd222222asd"),
    fetch("http://193.188.23.149:1337/api/teach-dates"),
    fetch("http://193.188.23.149:1337/api/news?populate=picture"),
    fetch("http://193.188.23.149:1337/api/videolists"),
    
  ]);
  const [articles, teachDates, news, videoIds] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),
    res4.json(),
  ])
  return {
    props: {
      articles: articles.data || [],
      teachDates: teachDates.data || [],
      news: news.data || [],
      videoIds: videoIds.data || [],
    },
    revalidate: 60,
  };
}

export default function Home({ articles, teachDates, news, videoIds }) {
  return (
    <>
      <Head>
        <title>Школа сапёров</title>
        <meta
          name="description"
          content="Получите профессию сапёра и научитесь безопасно работать с минами и взрывоопасными предметами."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Hero />
      <About />
      <AboutProfession teachDates={teachDates} />
      <TrainingLocation />
      <LearnSkills />
      <CourseContent />
      <CertificateSection />
      <EmployersSection />
      <ResumeBlock />
      <PriceBlock />
      <FAQ articles={articles} />
      <News news={news}/>
      <VideoCarousel videoIds={videoIds}/>
      <Contact />
      <ScrollButton />
      <Footer />
    </>
  );
}