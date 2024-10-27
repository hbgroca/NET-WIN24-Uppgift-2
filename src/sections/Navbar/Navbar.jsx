import { NavLink, useNavigate } from "react-router-dom";

// CSS imports
import './Navbar.css'
import '../../css/animations.css'

// Component imports
import BtnDarkMode from '../../components/Buttons/BtnDarkMode'
import BtnHamburger from '../../components/Buttons/BtnHamburger'
import BtnSignIn from '../../components/Buttons/BtnSignIn';

// Image imports
import siliconLogo from '/images/svg/navbar/SiliconLogo.svg';
import AsideNavMenu from './AsideNavMenu';
import PopUp from '../../components/PopUp/PopUp';

export default function Navbar({ darkMode, changeTheme }) {

  // Chat GPT code. Could't figure out how to get it to scroll to the features section after navigating to the main page.
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to the main page
    navigate('/');

    // Wait for the page to load and then scroll to the features section
    setTimeout(() => {
      const section = document.getElementById('features');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Timeout to make shure the page has loaded
  };


  return (<>
  
    <nav className="navbar container">
      <div className="navbar-left">
          <div className="flex gap-2">
              <img className="hover-spinn" src={siliconLogo} alt="Silicon logo" />
              <NavLink className='navbar-logo-text' to="/" aria-label="Navigate to main page."><h5 className='navbar-logo-text'>Silicon</h5></NavLink>
          </div>
          <div className="navbar-links">
              <NavLink onClick={handleNavigation} to='/#features' aria-label="Navigate to features.">Features</NavLink>
              <NavLink to="contact" aria-label="Navigare to contact page.">Contact</NavLink>
          </div>
      </div>
      <div className="navbar-right">
          {/* Dark mode toggle */}

          <BtnDarkMode darkMode={darkMode} changeTheme={changeTheme}/>
          {/* Hamburger menu button */}
          <BtnHamburger />
          
          {/* Log in button */}
          <BtnSignIn input={'Sign in / up'}/>
      </div>
      {/* Aside nav menu */}
      <AsideNavMenu />

      {/* Sign in Pop up */}
      <PopUp />
    </nav>
  </>);
}