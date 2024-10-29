import { useEffect, useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {

  // State for input fields
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''});
  const [submitted, setSubmitted] = useState(false);

  const [inputFields, setInputFields] = useState({});

   // Get input fields to state on mount
  useEffect(() => {
    setInputFields({
      name: document.querySelector('.error-name'),
      email: document.querySelector('.error-email'),
      specialist: document.querySelector('.specialist-name'),
    });
  }, []);

  // Handlers
  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Validate form function
  const validateForm = (e) => {
    e.preventDefault();

    // Display input fields and clear previous error messages
    if(submitted){
      setSubmitted(false);
      inputFields.name.style.display = 'none';
      inputFields.email.style.display = 'none';
      inputFields.specialist.style.display = 'none';
      return;
    };
    
    // Validate all input fields
    const validName = validateName(formData.fullName.trim());
    const validEmail = validateEmail(formData.email.trim());
    const validSpecialist = validateSpecialist(formData.specialist.trim());

    // If all input fields are valid we can submit the form
    if (validName && validEmail && validSpecialist) {
      
      // Submit form
      submitContactForm();
    }
  };

  const submitContactForm = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formData),
    })
    if(res.ok){
      setSubmitted(true);
      setFormData({fullName: '', email: '', specialist: ''});
    }
  };

  
  function validateName(name) {
    // Clear previous error message
    inputFields.name.style.display = 'none';

    // Check if name is empty
    if (name === '' || name.length < 3) {
      inputFields.name.style.display = 'block';
      return false;
    } else {
      inputFields.name.style.display = 'none';
      return true;
    }
  };


  function validateEmail(email) {
    // Clear previous error message
    inputFields.email.style.display = 'none';

    // Check if email is empty
    if (email === '') {
      inputFields.email.style.display = 'block';
      inputFields.email.textContent = 'Enter your email above.';
      return false;
    } 

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = email => emailRegex.test(email);

    if (!isValidEmail(email)){
      inputFields.email.style.display = 'block';
      inputFields.email.textContent = 'Please enter a valid email address.';

      return false;
    }

    return true;
  };


  function validateSpecialist(specialist) {
    // Clear previous error message
    inputFields.specialist.style.display = 'none';

    // Check if specialist is empty
    if (specialist === '') {
      inputFields.specialist.style.display = 'block';
      return false;
    } else {
      inputFields.specialist.style.display = 'none';
      return true;
    }
  };


  return(<>
    <form className={submitted ? "contact-form submitted" : "contact-form"} onSubmit={validateForm} noValidate>
      <h2 className='heading'>Get Online Consultation</h2>
            
      <div className='contact-form-inputs'>
        <p className='text'>Full name</p>
        <input name='fullName' type="text" id="inputtext" onChange={handleInputChange} required value={formData.fullName}/>
        <small className='error-name'>Please enter your full name above.</small>
      
        <p className='text'>Email adress</p>
        <input name='email' type="mail" id="inputmail" onChange={handleInputChange} required value={formData.email}/>
        <small className='error-email'>Enter your email above.</small>
      
        <p className='text'> Specialist</p>

        <select name="specialist" id="inputspec" onChange={handleInputChange} value={formData.specialist} required>
          <option value="">--Please choose an option--</option>
          <option value="Sales">Sales</option>
          <option value="Finacials">Finacials</option>
          <option value="Gynecologist ">Gynecologist </option>
          <option value="Complaints">Complaints</option>
        </select>

        <small className='specialist-name'>Please select one of the options from the list above.</small>
      </div>

      <h4 className='contact-form-success'>You have succesfully made an appointment and will be contacted shortly.</h4>
    
      <input id='submit-appointment' className='btn' type="submit" value={submitted ? "Make another appointment" : "Make an appointment"}  />
      
    </form>
  </>);
};