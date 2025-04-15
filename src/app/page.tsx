import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import ThemeSection from '@/components/ThemeSection';
import QuoteForm from '@/components/QuoteForm';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ThemeSection />
      <AboutSection />
      <QuoteForm />
    </>
  );
}