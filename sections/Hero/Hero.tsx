import { LinkToSection } from '@/components/LinkToSection';

export const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <h2>Professional Electrical & Security Solutions</h2>
        <p>Your trusted partner for all electrical, insulation, and security system needs</p>
        <div className="hero-buttons">
          <LinkToSection href="#services" className="btn">Our Service</LinkToSection>
          <LinkToSection href="#contact" className="btn btn-outline">Get a Free Quote</LinkToSection>
        </div>
      </div>
    </section>
  );
}