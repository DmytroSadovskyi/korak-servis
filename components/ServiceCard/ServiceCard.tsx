import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBolt, FaHouseFloodWater } from 'react-icons/fa6';
import { IServiceCardProps } from './props';

export const ServiceCard = ({ title, list }: IServiceCardProps) => {

  const setIcon = (title: string) => {
    switch (title) { 
      case 'electrical work':
        return <FaBolt />
      case 'hydro insulation services':
        return <FaHouseFloodWater />
      case 'security system installation':
        return <FaShieldAlt />
      default:
        return <FaBolt />
    }
  }

  return (
     <div className="service-card">
            <div className="service-icon">{setIcon(title)}</div>
            <div className="service-content">
              <h3 className='uppercase text-center'>{title}</h3>
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Link href="#contact" className="btn">Learn More</Link>
            </div>
          </div>
  );
};
