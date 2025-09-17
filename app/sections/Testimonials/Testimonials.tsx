export const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Hear from our satisfied customers</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>Korak Servis transformed our office with their professional electrical work. Highly recommended!</p>
              <h4>John Doe</h4>
              <span>Business Owner</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>&ldquo;Their security system installation gave us peace of mind. Excellent service and support.&rdquo;</p>
              <h4>Jane Smith</h4>
              <span>Homeowner</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>&ldquo;The waterproofing solution saved our basement from water damage. Top-notch work!&rdquo;</p>
              <h4>Mike Johnson</h4>
              <span>Property Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}