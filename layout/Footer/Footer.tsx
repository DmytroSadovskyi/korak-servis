import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import croatianLang from '@/messages/hr.json';


export const Footer = () => {

  const {header: {links}, footer:{title, paragraph, contactSubtitle, phone, phoneAriaLabel, email, emailAriaLabel, address, addressAriaLabel, quickLinksSubtitle, copyright}} = croatianLang

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <div className="footer-social">
              <a href="#" aria-label='facebook'><FaFacebook aria-label='facebook' size={40}/></a>
              <a href="https://www.instagram.com/korak_servis?igsh=azhweXAwY2VzbDNr&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label='instagram'><FaInstagram aria-label='instagram' size={40}/></a>
            
            </div>
          </div>
          <div className="footer-section footer-contact">
            <h3>{contactSubtitle}</h3>
            <p><FaPhone aria-label={phoneAriaLabel} /><a href="tel:+385916154914" aria-label={phoneAriaLabel}>{phone}</a></p>
           <p><FaEnvelope aria-label={emailAriaLabel} /> <a href="mailto:korakservis@gmail.com" aria-label={emailAriaLabel}>{email}</a></p> 
           <p><FaMapMarkerAlt aria-label={addressAriaLabel} /> {address}</p> 
          </div>
          <div className="footer-section footer-links">
            <h3>{quickLinksSubtitle}</h3>
            <ul>
             {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
             ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {copyright}</p>
        </div>
      </div>
    </footer>
  );
}