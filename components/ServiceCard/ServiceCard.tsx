'use client'

import { FaShieldAlt } from 'react-icons/fa';
import { FaBolt, FaHouseFloodWater } from 'react-icons/fa6';
import { IServiceCardProps } from './props';
import { LinkToSection } from '../LinkToSection';
import croatianLang from '@/messages/hr.json';

export const ServiceCard = ({ title, list }: IServiceCardProps) => {

  const {services: {linkText}} = croatianLang;
 
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
     <li className="service-card">
            <div className="service-icon">{setIcon(title)}</div>
            <div className="service-content">
              <h3 className='uppercase text-center'>{title}</h3>
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
             <LinkToSection href="#contact" className="btn">{linkText}</LinkToSection>
            </div>
          </li>
  );
};
