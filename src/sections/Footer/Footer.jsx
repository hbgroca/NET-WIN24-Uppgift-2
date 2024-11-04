import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <div className="links">
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/contact" className="footer-link">- Contact -</NavLink>
          <NavLink to="/testimonials" className="footer-link">Reviews</NavLink>
        </div>
        <p className="footer-text">© 2024 Silicon. All rights reserved. Credit MadrasThemes <span>REMAKE BY HBGROCA</span></p>
      </div>
    </footer>
  );
}