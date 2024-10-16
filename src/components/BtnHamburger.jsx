import '../css/BtnHamburger.css';

function BtnHamburger(){

  function toggleMenu() {
    // document.querySelector('.navbar-side').classList.toggle('navbar-side-active');
    document.querySelector('.btn-hamburger').classList.toggle('btn-hamburger-active');
  }

  return (
    <>
      <button onClick={toggleMenu} className="btn-hamburger-area" aria-controls="btns-aside" aria-label="Öppna och stäng navigation menu.">
          <span className="btn-hamburger" aria-hidden="true"></span>
      </button>
    </>
  );
};
export default BtnHamburger;