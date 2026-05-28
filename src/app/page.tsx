import GovStrip from '@/components/GovStrip';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EndorseStrip from '@/components/EndorseStrip';
import WhySqaaf from '@/components/WhySqaaf';
import Domains from '@/components/Domains';
import PerfLevels from '@/components/PerfLevels';
import AssessDemo from '@/components/AssessDemo';
import Process from '@/components/Process';
import Dashboard from '@/components/Dashboard';
import QuoteBlock from '@/components/QuoteBlock';
import FinalCTA from '@/components/FinalCTA';
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
      <AssessDemo />
      <Process />
      <Dashboard />
      <QuoteBlock />
      <FinalCTA />
      <Footer />
    </>
  );
}
