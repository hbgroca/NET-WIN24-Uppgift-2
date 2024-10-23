import { NavLink, useNavigate } from 'react-router-dom';
import './AsideNavMenu.css';

export default function AsideNavMenu() {

// Chat GPT code. Could't figure out how to get it to scroll to the features section after navigating to the main page.
const navigate = useNavigate();

const handleNavigation = () => {
  // Clise the side menu
  buttonPressed();
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
        <NavLink to="/" aria-label="Go to features." onClick={buttonPressed}><span>Home</span></NavLink>
        <NavLink onClick={handleNavigation} aria-label="Navigate to features."><span>Features</span></NavLink>
        <NavLink to="/contact" aria-label="Go to contact page." onClick={buttonPressed}><span>Contact</span></NavLink>
        <a href="#" aria-label="Sign in to your account." onClick={LoginPressed}><span>Sign in / up</span></a>
      </div>
    </nav>
  </>);
};