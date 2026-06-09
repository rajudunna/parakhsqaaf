import GovStrip from '@/components/GovStrip';
import RevealInit from '@/components/RevealInit';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EndorseStrip from '@/components/EndorseStrip';
import WhySqaaf from '@/components/WhySqaaf';
import Domains from '@/components/Domains';
import PerfLevels from '@/components/PerfLevels';
import Features from '@/components/Features';
import AssessDemo from '@/components/AssessDemo';
import ActionEngine from '@/components/ActionEngine';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <GovStrip />
      <Header />
      <Hero />
      <EndorseStrip />
      <WhySqaaf />
      <Domains />
      <PerfLevels />
      <Features />
      <AssessDemo />
      <ActionEngine />
      <Process />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
      <RevealInit />
    </>
  );
}
