import { ServiceList } from '@/components/ServiceList';
import  services  from '@/data/services.json';



export const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for your home or business</p>
        </div>
        <ServiceList services={services} />
      </div>
    </section>
  );
}