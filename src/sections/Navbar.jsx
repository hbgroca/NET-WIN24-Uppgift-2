import { NavLink } from "react-router-dom";
import { useState } from "react"

// CSS imports
import '../css/Navbar.css'
import '../css/animations.css'

// Component imports
import BtnDarkMode from '../components/BtnDarkMode'
import BtnHamburger from '../components/BtnHamburger'
import BtnSignIn from '../components/BtnSignIn';

// Image imports
import siliconLogo from '/images/svg/navbar/SiliconLogo.svg';
import AsideNavMenu from '../components/AsideNavMenu';
import PopUp from '../components/PopUp/PopUp';

export default function Navbar({ darkMode, setDarkMode }) {
  return (<>
  
    <nav className="navbar container">
      <div className="navbar-left">
          <div className="flex gap-2">
              <img className="hover-spinn" src={siliconLogo} alt="Silicon logo" />
              <NavLink className='navbar-logo-text' to="/" aria-label="Navigate to main page."><h5 className='navbar-logo-text'>Silicon</h5></NavLink>
          </div>
          <div className="navbar-links">
              {/* <a href="/#features" aria-label="Scroll down to features.">Features</a> */}
              <NavLink to="/#features" aria-label="Navigare to features.">Features</NavLink>
              <NavLink to="contact" aria-label="Navigare to contact page.">Contact</NavLink>
          </div>
      </div>
      <div className="navbar-right">
          {/* Dark mode toggle */}

          <BtnDarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
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