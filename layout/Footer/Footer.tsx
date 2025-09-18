import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Services', href: '#services' },
  { name: 'Executed Works', href: '#executed-works' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KORAK SERVIS</h3>
            <p>Professional Electrical & Security Solutions for residential and commercial clients. Trusted experts with years of experience.</p>
            <div className="footer-social">
              <a href="#" aria-label='facebook'><FaFacebook aria-label='facebook' size={40}/></a>
              <a href="https://www.instagram.com/korak_servis?igsh=azhweXAwY2VzbDNr&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label='instagram'><FaInstagram aria-label='instagram' size={40}/></a>
            
            </div>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <p><FaPhone aria-label='phone number'/><a href="tel:+385916154914" aria-label='phone number'> +385 91 615 4914</a></p>
           <p><FaEnvelope aria-label='email'/> <a href="mailto:korakservis@gmail.com" aria-label='email'>korakservis@gmail.com</a></p> 
           <p><FaMapMarkerAlt aria-label='location'/> Ulica Ljudevita Gaja 7A, 47240, Slunj</p> 
          </div>
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
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
          <p>&copy; {currentYear} KORAK SERVIS d.o.o. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}