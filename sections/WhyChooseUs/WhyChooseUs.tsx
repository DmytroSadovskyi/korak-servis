export const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section" id="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>Discover what sets Korak Servis apart from the competition</p>
        </div>
        <div className="why-choose-us-grid">
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><i className="fas fa-star"></i></div>
            <div className="why-choose-us-content">
              <h3>Expertise & Experience</h3>
              <p>Our technicians bring years of industry experience to deliver top-quality solutions.</p>
            </div>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><i className="fas fa-shield-alt"></i></div>
            <div className="why-choose-us-content">
              <h3>Safety First</h3>
              <p>We prioritize safety in every project, adhering to the highest industry standards.</p>
            </div>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><i className="fas fa-clock"></i></div>
            <div className="why-choose-us-content">
              <h3>Reliable Service</h3>
              <p>Count on us for timely, dependable service with a focus on customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}