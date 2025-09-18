import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-content">
        <h2>Professional Electrical & Security Solutions</h2>
        <p>Your trusted partner for all electrical, insulation, and security system needs</p>
        
        <div className="hero-buttons">
          <Link href="#services" className="btn">Our Services</Link>
          <Link href="#contact" className="btn btn-outline">Get a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}