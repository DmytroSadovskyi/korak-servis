import Link from 'next/link';

export const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for your home or business</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-bolt"></i></div>
            <div className="service-content">
              <h3>ELECTRICAL WORK</h3>
              <ul>
                <li>Residential & Commercial Wiring</li>
                <li>Lighting Installation & Upgrades</li>
                <li>Panel Upgrades & Repairs</li>
                <li>EV Charger Installation</li>
                <li>Troubleshooting & Maintenance</li>
              </ul>
              <Link href="#contact" className="btn">Learn More</Link>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-house-flood-water"></i></div>
            <div className="service-content">
              <h3>HYDRO INSULATION SERVICES</h3>
              <ul>
                <li>Basement & Foundation Waterproofing</li>
                <li>Roof & Wall Moisture Protection</li>
                <li>Interior & Exterior Solutions</li>
                <li>Mold & Mildew Prevention</li>
                <li>Energy-Efficient Barrier Installations</li>
              </ul>
              <Link href="#contact" className="btn">Learn More</Link>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-shield-alt"></i></div>
            <div className="service-content">
              <h3>SECURITY SYSTEM INSTALLATION</h3>
              <ul>
                <li>Smart Home Security Systems</li>
                <li>CCTV Camera Setup</li>
                <li>Motion Detectors & Alarms</li>
                <li>Door & Window Sensors</li>
                <li>Remote Monitoring & Mobile Alerts</li>
              </ul>
              <Link href="#contact" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}