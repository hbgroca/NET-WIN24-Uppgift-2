import ContactForm from '../components/ContactForm/ContactForm';
import './ContactPage.css';

export default function ContactPage() {
  return(<>
    <div className="background"></div>
      <div className="contact-page container">
        <div className="contact-wrapper">
        
        <h1>Contact Us</h1>

          <div className='contact-page-card'> 
          <div className='logo'><img src="./images/svg/ContactPage/mail-icon.svg" alt="" /></div>
            <div>
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a className='arrow'  href="#">Leave a message <img className='arrow' src="./images/svg/arrow-right-blue.svg" alt="" /></a>
            </div>
          </div>
          <div className='contact-page-card'>
            <div className='logo'><img src="./images/svg/ContactPage/careers-icon.svg" alt="" /></div>
              <div>
                <h3>Careers</h3>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a className='arrow' href="#">Send an application <img src="./images/svg/arrow-right-blue.svg" alt="" /></a>
              </div>
            </div>
        </div>
      
      
      <ContactForm />

        
    </div>

    <div className="map container">
      <div className="image-container">
        <img src="./images/svg/ContactPage/map.svg" alt="" />
      </div>
      <div >
        <div className='contact-centers'>
          <h4>Medical Center 1</h4>

          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/position-icon.svg" alt="" />
            <p className='adress'>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          
          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/phone-icon.svg" alt="" />
            <p className='phone'>(406) 555-0120</p>
          </div>
          
          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/time-icon.svg" alt="" />
            <div>
              <p className='hours'>Mon-Fri: <span>9:00 am - 22:00am</span></p>
              <p className='hours'>Sat-Sun: <span>9:00 am - 20:00am</span></p>
            </div>
          </div>

        </div>

        <div className='contact-centers'>
          <h4>Medical Center 2</h4>

          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/position-icon.svg" alt="" />
            <p className='adress'>2464 Royal Ln. Mesa,New Jersey 45463</p>
          </div>
          
          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/phone-icon.svg" alt="" />
            <p className='phone'>(406) 544-0123</p>
          </div>
          
          <div className='flex gap-2'>
            <img src="./images/svg/ContactPage/time-icon.svg" alt="" />
            <div>
              <p className='hours'>Mon-Fri: <span>9:00 am - 22:00am</span></p>
              <p className='hours'>Sat-Sun: <span>9:00 am - 20:00am</span></p>
            </div>
          </div>
        </div>


        <div className='contact-links'>
          <a href=""><img src="./images/svg/ContactPage/links/facebook.svg" alt="" /></a>
          <a href=""><img src="./images/svg/ContactPage/links/twitter.svg" alt="" /></a>
          <a href=""><img src="./images/svg/ContactPage/links/instagram.svg" alt="" /></a>
          <a href=""><img src="./images/svg/ContactPage/links/youtube.svg" alt="" /></a>
        </div>
      </div>
    </div>
    
  </>);
};