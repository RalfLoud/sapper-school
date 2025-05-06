import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import TrainingLocation from "@/components/TrainingLocation";
import Skeleton from "@/components/Skeleton";

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
  loading: () => <Skeleton height="h-10" width="w-3/4" />,
});

export async function getStaticProps() {
  const res = await fetch("http://193.188.23.149:1337/api/faqs2easd222222asd");
  const data = await res.json();
  
  return {
    props: {
      articles: data.data || [],
    },
    revalidate: 60,
  };
}

export default function Home({ articles }) {
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
      <AboutProfession />
      <TrainingLocation />
      <LearnSkills />
      <CourseContent />
      <CertificateSection />
      <EmployersSection />
      <ResumeBlock />
      <PriceBlock />
      <FAQ articles={articles} />
      <Contact />
      <ScrollButton />
      <Footer />
    </>
  );
}