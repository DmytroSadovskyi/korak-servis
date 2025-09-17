import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { ExecutedWorks } from './sections/ExecutedWorks/ExecutedWorks';
import { Testimonials } from './sections/Testimonials/Testimonials';
import { About } from './sections/About/About';
import { WhyChooseUs } from './sections/WhyChooseUs/WhyChooseUs';
import { Contact } from './sections/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ExecutedWorks />
      <Testimonials />
      <About />
      <WhyChooseUs />
      <Contact />
    </>
  );
}