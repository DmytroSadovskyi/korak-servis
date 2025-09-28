import { LinkToSection } from '@/components/LinkToSection';
import Image from 'next/image';
import croatianLang from '@/messages/hr.json';

export const About = () => {

const {about: {title,firstSubtitle,secondSubtitle,thirdSubtitle,linkText,imageAlt,linkHref}} = croatianLang;

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>{title}</h2>
            <p>{firstSubtitle}</p>
            <p>{secondSubtitle}</p>
            <p>{thirdSubtitle}</p>
           
            <LinkToSection href={linkHref} className="btn">{linkText}</LinkToSection>
          </div>
          <div className="about-image">
            <Image src="/photo-14.jpg" alt={imageAlt} width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}