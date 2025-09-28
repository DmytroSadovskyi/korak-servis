import { FaStar, FaShieldAlt, FaClock } from "react-icons/fa";
import croatianLang from '@/messages/hr.json';

export const WhyChooseUs = () => {

  const {whyChooseUs: {title, subtitle, benefits}} = croatianLang;

  return (
    <section className="why-choose-us section" id="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="why-choose-us-grid">
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaStar/></div>
            <div className="why-choose-us-content">
              <h3>{benefits[0].title}</h3>
              <p>{benefits[0].description}</p>
            </div>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaShieldAlt/></div>
            <div className="why-choose-us-content">
              <h3>{benefits[1].title}</h3>
              <p>{benefits[1].description}</p>
            </div>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaClock/></div>
            <div className="why-choose-us-content">
              <h3>{benefits[2].title}</h3>
              <p>{benefits[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}