import { ServiceList } from '@/components/ServiceList';
import croatianLang from '@/messages/hr.json';


export const Services = () => {
  const {services: {title, subtitle, list}} = croatianLang;
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <ServiceList services={list} />
      </div>
    </section>
  );
}