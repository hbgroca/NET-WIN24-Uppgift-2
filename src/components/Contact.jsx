import Button from "../components/Button";
import '../css/contact.css';

export default function Contact() {

  function test() {
    console.log("test");
  }

  return (<>
    <div id="Kontakt" className="contact">
          <div className="contact-phone card-contact ">
              <img src="./images/svg/contact/phone.svg" alt=""/>
              <p>Still have questions?</p>
              <a href="tel:04213456" className="hover-zoom">Contact us <img src="/images/svg/arrow-right-blue.svg"></img></a>
          </div>
          <div className="contact-mail card-contact ">
              <img src="./images/svg/contact/chat.svg" alt=""/>
              <p>Dont't like phone calls?</p>
              <a href="mailto:info@silicon.se" className="hover-zoom">Contact us <img src="/images/svg/arrow-right-green.svg"></img></a>
          </div>
          
          <Button classes="btn-md contact-btn" click={test()} text="Contact us now"/>
      </div>
  </>);
};