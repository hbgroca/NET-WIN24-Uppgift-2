import { NavLink } from 'react-router-dom';
import '../css/AsideNavMenu.css';

export default function AsideNavMenu() {
  
// Close side menu when a link is clicked
function buttonPressed(){
  document.querySelector('.navbar-side').classList.toggle('navbar-side-active');
  document.querySelector('.btn-hamburger').classList.toggle('btn-hamburger-active');
};

// Open sign in pop up
function LoginPressed(){
  document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
  document.querySelector('.navbar-side').classList.toggle('navbar-side-active');
  document.querySelector('.btn-hamburger').classList.toggle('btn-hamburger-active');
}

  return (<>
    <nav id="nav-aside" className="navbar-side">
      <div className="navbar-side-links">
        <NavLink to="/" aria-label="Go to features." onClick={buttonPressed}>Home</NavLink>
        <NavLink to="/#features" aria-label="Go to features." onClick={buttonPressed}>Features</NavLink>
        <NavLink to="/contact" aria-label="Go to contact page." onClick={buttonPressed}>Contact</NavLink>
        <a href="#" aria-label="Sign in to your account." onClick={LoginPressed}>Sign in / up</a>
      </div>
    </nav>
  </>);
};