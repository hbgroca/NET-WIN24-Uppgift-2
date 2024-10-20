import { useState, useEffect } from 'react';
import '../css/accordion.css';

export default function Accordion(){

    // state variable to store the data from API
    const [faqs, setFaqs] = useState([]);

    // Get data from API
    useEffect(() => {
        fetch('https://win24-assignment.azurewebsites.net/api/faq')
        .then(response => response.json())
        .then(data => setFaqs(data))
        .catch(error => console.error('Failed to fetch:', error));
    }, []);


    // FAQ Questions open / close function.
    function faqExpand(faqQuestion){
        const faqClassList = document.getElementById("faq-faqs-" + faqQuestion);
        faqClassList.classList.toggle('expanded');
    }

    return (
        <div className="faq-faqs">
            {faqs.map((faq, index) => (
                <div key={index} id={"faq-faqs-" + index} className="card-faq" onClick={()=>{faqExpand(index)}}>
                    <div className="question">
                        <h6>{faq.title}</h6>
                        <button className="btn-rounded-md btn-rounded" alt="" aria-hidden="true"></button>
                    </div>
                    <div className="answer">
                        <p className='expandable'>{faq.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}