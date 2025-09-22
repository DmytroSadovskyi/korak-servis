import { IServiceListProps } from "./props";
import { ServiceCard } from '../ServiceCard/ServiceCard';

export const ServiceList = ({ services }: IServiceListProps) => {
  return (
    <ul className="services-grid">
      {services.map((service) => (
        <ServiceCard id={service.id} key={service.id} title={service.title} list={service.list}  />
      ))}
    </ul>
  );
};
