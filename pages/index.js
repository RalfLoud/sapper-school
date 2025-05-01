import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import News from '../components/News';
import VideoCarousel from '../components/VideoCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Landing Page</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <VideoCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}