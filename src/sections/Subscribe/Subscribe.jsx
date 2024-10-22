// Image imports
import BellIcon from '/images/svg/subscribe/notification-icon-1.svg';
// Component imports
import InputSubscribe from './InputSubscribe';
// CSS imports
import './Subscribe.css';
import { useEffect } from 'react';

export default function Subscribe() {

  // On load of page
  useEffect(() => {
    if (window.innerWidth > 1280) {
      document.querySelector('.subscribe-text').textContent = 'Subscribe to our newsletter to stay informed about latest updates';
    }else{
      document.querySelector('.subscribe-text').textContent = 'Subscribe to our newsletter';
    }
  }, []);

  // On rezise of screen widht
  window.onresize = function() {
    // if the screen width is less than 768px, the function will be called
    if (window.innerWidth > 1280) {
      document.querySelector('.subscribe-text').textContent = 'Subscribe to our newsletter to stay informed about latest updates';
    }else{
      document.querySelector('.subscribe-text').textContent = 'Subscribe to our newsletter';
    }
  }


  return(
    <>
      <div className='subscribe-wrapper container'>
        <div className='subscribe'>
          <div className="subscribe-text-wrapper">
              <img className="animate-jump" src={BellIcon} alt="Notifikations ikon"></img>
              <h5 className="subscribe-text">Subscribe to our newsletter</h5>
          </div>

          {/* Subscribe input field */}
          <InputSubscribe />
        
        </div>
      </div>
    </>
  );
};