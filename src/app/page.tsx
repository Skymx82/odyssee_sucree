import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
