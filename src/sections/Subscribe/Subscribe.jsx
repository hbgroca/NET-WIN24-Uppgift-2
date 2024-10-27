// Image imports
import BellIcon from '/images/svg/subscribe/notification-icon-1.svg';
// Component imports
import InputSubscribe from './InputSubscribe';
// CSS imports
import './Subscribe.css';

export default function Subscribe() {

  return(
    <>
      <div className='subscribe-wrapper container'>
        <div className='subscribe'>
          <div className="subscribe-text-wrapper">
              <img className="animate-jump" src={BellIcon} alt="Notifikations ikon"></img>
              <h5 className="subscribe-text"></h5>
          </div>

          {/* Subscribe input field */}
          <InputSubscribe />
        
        </div>
      </div>
    </>
  );
};