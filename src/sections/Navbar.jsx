import '../css/Navbar.css'
import '../css/animations.css'

// Component imports
import BtnDarkMode from '../components/BtnDarkMode'
import BtnHamburger from '../components/BtnHamburger'
import BtnSignIn from '../components/BtnSignIn';

// Image imports
import siliconLogo from '/images/svg/navbar/SiliconLogo.svg';

export default function Navbar() {
  return (<>
    <nav className="navbar container">
      <div className="navbar-left">
          <div className="flex gap-2">
              <img className="hover-spinn" src={siliconLogo} alt="Silicon logo" />
              <h5 className='navbar-logo-text'>Silicon</h5>
          </div>
          <div className="navbar-links">
              <a href="#Hem" aria-label="Gå till överst på sidan.">Features</a>
              <a href="#Funktioner" aria-label="Gå till appens funktioner.">Contact</a>
          </div>
      </div>
      <div className="navbar-right">
          {/* Dark mode toggle */}

          <BtnDarkMode />
          {/* Hamburger menu button */}
          <BtnHamburger />
          
          {/* Log in button */}
          <BtnSignIn input={'Sign in / up'}/>
      </div>
    </nav>
  </>);
}