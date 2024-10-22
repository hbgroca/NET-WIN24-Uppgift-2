import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import './contact.css';

export default function Contact() {

  return (<>
    <div id="Kontakt" className="contact">
          <div className="contact-phone card-contact ">
              <img src="./images/svg/contact/phone.svg" alt=""/>
              <p>Still have questions?</p>
              <NavLink to="/contact">Contact us <img src="/images/svg/arrow-right-blue.svg"/></NavLink>
          </div>
          <div className="contact-mail card-contact ">
              <img src="./images/svg/contact/chat.svg" alt=""/>
              <p>Dont't like phone calls?</p>
              <NavLink to="/contact">Contact us <img src="/images/svg/arrow-right-green.svg"/></NavLink>
          </div>
          
          
          <Button classes="btn-lg contact-btn" text={<NavLink to="/contact">Contact us now</NavLink>}/>
          
      </div>
  </>);
};