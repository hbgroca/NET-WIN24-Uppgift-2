import './hero.css';
import { useEffect } from 'react';

export default function Hero({ darkMode }) {

  useEffect(() => {
    if(darkMode){
      // Change apple and google store svg
      document.getElementById("appleStore").src = `./images/svg/hero/appstore-dark.svg`;
      document.getElementById("googleStore").src = `./images/svg/hero/googleplay-dark.svg`;
    }else{
        document.getElementById("appleStore").src = `./images/svg/hero/appstore-light.svg`;
        document.getElementById("googleStore").src = `./images/svg/hero/googleplay-light.svg`;
    }
  },[darkMode]);

  useEffect(() => {
    if(localStorage.getItem("darkMode") === "true"){
      // Change apple and google store svg
      document.getElementById("appleStore").src = `./images/svg/hero/appstore-dark.svg`;
      document.getElementById("googleStore").src = `./images/svg/hero/googleplay-dark.svg`;
    }else{
        document.getElementById("appleStore").src = `./images/svg/hero/appstore-light.svg`;
        document.getElementById("googleStore").src = `./images/svg/hero/googleplay-light.svg`;
    }
  },);

  return(<>
    <div className="hero-bg">
      <div className="hero container">
        <div className="hero-header">
            <h1 className="hero-header-text">Manage All Your Money in One App</h1>
        </div>

        <div className="hero-info">
            <p className="hero-info-text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="hero-info-links">
                <a href="#" className="btn-store hover-zoom" aria-label="Länk till apple store">
                    <img id="appleStore" src="./images/svg/hero/appstore-light.svg" alt="Ikon med länk till apple store"/>
                </a>
                <a href="#" className="btn-store hover-zoom" aria-label="Länk till google play store">
                    <img id="googleStore" src="./images/svg/hero/googleplay-light.svg" alt="Ikon med länk till google play store"/>
                </a>
            </div>

            <a className="hero-info-btn animate-pulse hover-zoom" href="#features" aria-label="Gå vidare till funktioner.">
                <button className="btn-rounded btn-rounded-md shadow-md" tabIndex="-1" aria-hidden="true"/>
                <p>Discover more</p>
            </a>
        </div>

        <div className="hero-phones">
            <div>
                <span className="img-left"></span>
                <span className="img-right"></span>
            </div>
        </div>
      </div>
  </div>
  </>);
};