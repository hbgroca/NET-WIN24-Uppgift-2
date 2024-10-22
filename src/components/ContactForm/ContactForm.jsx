import { useEffect, useState } from 'react';
import './ContactForm.css';


export default function ContactForm() {
  // State for input fields
  const [errorInput, setErrorInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);
  const [specialistInput, setSpecialistInput] = useState(null);

  // Get input fields to state on mount
  useEffect(() => {
    setErrorInput(document.querySelector('.error-name'));
    setSpecialistInput(document.querySelector('.specialist-name'));
    setEmailInput(document.querySelector('.error-email'));
  }, []);


  // Validate form function
  const validateForm = (e) => {
    // Prevent reloading of site
    e.preventDefault();

    // Display input fields
    if(document.querySelector('.contact-form').classList.contains('submitted')) {
      document.querySelector('#submit-appointment').value = 'Make an appointment';
      errorInput.style.display = 'none';
      emailInput.style.display = 'none';
      specialistInput.style.display = 'none';
      document.querySelector('.contact-form').classList.remove('submitted');
      return;
    };
    

    // Validate all input fields
    const validName = validateName(document.querySelector('#inputtext').value.trim());

    const validEmail = validateEmail(document.querySelector('#inputmail').value.trim());

    const validSpecialist = validateSpecialist(document.querySelector('select').value.trim());

    // If all input fields are valid we can submit the form
    if (validName && validEmail && validSpecialist) {
      // Submit form
      const submitResponse = submitContactForm();

      // Handle response
      submitResponse.then(status => {
        if(status === 200){
          // Display success
          document.querySelector('.contact-form').classList.add('submitted');
          document.querySelector('#submit-appointment').value = 'Make another appointment';

          // Clear all input fields
          document.querySelector('#inputtext').value = '';
          document.querySelector('#inputmail').value = '';
          document.querySelector('select').value = '';
          
        } else {
          // Display Fail
          alert('F#ck.. it did`t work');
        }
      })
    }
  };


  function submitContactForm() {
    return fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      body: JSON.stringify({
        fullName: document.querySelector('#inputtext').value.trim(),
        email: document.querySelector('#inputmail').value.trim(),
        specialist: document.querySelector('select').value.trim()
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => {
      return response.status;
    }).catch((error) => {
      console.error('Failed to submit:', error);
    });
  };

  
  function validateName(name) {
    // Clear previous error message
    errorInput.style.display = 'none';

    // Check if name is empty
    if (name === '') {
      errorInput.style.display = 'block';
      return false;
    } else {
      errorInput.style.display = 'none';
      return true;
    }
  };


  function validateEmail(email) {
    // Clear previous error message
    emailInput.style.display = 'none';

    // Check if email is empty
    if (email === '') {
      emailInput.style.display = 'block';
      emailInput.textContent = 'Enter your email above.';
      return false;
    } 

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = email => emailRegex.test(email);

    if (!isValidEmail(email)){
      emailInput.style.display = 'block';
      emailInput.textContent = 'Please enter a valid email address.';

      return false;
    }

    return true;
  };


  function validateSpecialist(specialist) {
    // Clear previous error message
    specialistInput.style.display = 'none';

    // Check if specialist is empty
    if (specialist === '') {
      specialistInput.style.display = 'block';
      return false;
    } else {
      specialistInput.style.display = 'none';
      return true;
    }
  };


  return(<>
    <div className="contact-form">
      <h2 className='heading'>Get Online Consultation</h2>
            
      <div className='contact-form-inputs'>
        <p className='text'>Full name</p>
        <input type="text" id="inputtext" />
        <small className='error-name'>Please enter your full name above.</small>
      
        <p className='text'>Email adress</p>
        <input type="mail" id="inputmail" />
        <small className='error-email'>Enter your email above.</small>
      
        <p className='text'> Specialist</p>

        <select name="specialist" id="inputspec">

          <option value="">--Please choose an option--</option>
          <option value="Sales">Sales</option>
          <option value="Finacials">Finacials</option>
          <option value="Gynecologist ">Gynecologist </option>
          <option value="Complaints">Complaints</option>
      
        </select>
        <small className='specialist-name'>Please select one of the options from the list above.</small>
        </div>

        <h4 className='contact-form-success'>You have succesfully made an appointment and will be contacted shortly.</h4>
    
      <input id='submit-appointment' className='btn' type="submit" value="Make an appointment" onClick={validateForm} />
    
    </div>
  </>);
};