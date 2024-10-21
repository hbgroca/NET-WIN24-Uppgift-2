import '../css/AsideNavMenu.css';

export default function AsideNavMenu() {
  
function LoginPressed(){
  document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
}

  return (<>
    <nav id="nav-aside" className="navbar-side">
      <div className="navbar-side-links">
        <a href="#Home" aria-label="Go to main page.">Home</a>
        <a href="#Contact" aria-label="Go to contacts.">Contact</a>
        <a href="#" aria-label="Sign in to your account." onClick={LoginPressed}>Sign in / up</a>
      </div>
    </nav>
  </>);
};