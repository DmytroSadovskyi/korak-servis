
import { LinkToSection } from '@/components/LinkToSection';
import croatianLang from '@/messages/hr.json';


export const Hero = () => {

const {hero: {title, subtitle, firstLinkText, secondLinkText}} = croatianLang;

  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          <LinkToSection href="#services" className="btn">{firstLinkText}</LinkToSection>
          <LinkToSection href="#contact" className="btn btn-outline">{secondLinkText}</LinkToSection>
        </div>
      </div>
    </section>
  );
}