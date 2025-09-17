import Link from 'next/link';

export const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About Korak Servis</h2>
            <p>With years of experience in the industry, Korak Servis has established itself as a trusted provider of professional electrical and security solutions for both residential and commercial clients.</p>
            <p>Our technicians are committed to delivering high-quality workmanship, using the latest tools and technologies to ensure your complete satisfaction.</p>
            <p>We pride ourselves on our reliability, attention to detail, and commitment to safety in every project we undertake.</p>
            <Link href="#contact" className="btn">Contact Us Today</Link>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="Korak Servis Team" />
          </div>
        </div>
      </div>
    </section>
  );
}