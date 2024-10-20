import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import '../css/faq.css';

export default function Faq() {
  return (
    <div className="faq container">

      <div className="faq-text">
        <h4>Any questions? Check out the FAQs</h4>
        <p>Still have unanswered questions and need to get in touch?</p>
      </div>

      <div className="accordion">
        <Accordion />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}