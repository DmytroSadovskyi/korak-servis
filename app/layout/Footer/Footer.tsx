import Link from 'next/link';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Executed Works', href: '#executed-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
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
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <p><a href="tel:+380911234567890"><i className="fas fa-phone"></i> 123-456-7890</a></p>
           <p><a href="mailto:korakservis@gmail.com"><i className="fas fa-envelope"></i> korakservis@gmail.com</a></p> 
           <p><i className="fas fa-map-marker-alt"></i> Ulica Ljudevita Gaja 7A, 47240, Slunj</p> 
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