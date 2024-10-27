import { useState, useEffect } from "react";

export default function InputSubscribe() {
  // State for email
  const [email, setEmail] = useState('')

  // Create event listener for email input
  useEffect (() => {
    const emailInput = document.getElementById('email-input')
    emailInput.addEventListener('input', () => {
      setEmail(emailInput.value)
    })
  }, [])

  // On submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Get email error message element
    const errorMsgText = document.getElementById('email-error-text')

    console.log("Skickar epost: " + email)
    
    switch(validateEmail(email)){
      case 'true':
        console.log("Email adress was valid: " + email)

        // Reset error message
        errorMsgText.textContent = ''

        // Post email to api
        const response = postEmail(email);

        // Handle response and update UI
        response.then(response => {
          if(response === 200){
            errorMsgText.textContent = 'Thank you for subscribing!';
            // Reset email input
            setEmail('')
            document.getElementById('email-input').value = ''
          } else {
            errorMsgText.textContent = 'Something went wrong, please try again later';
          }
        })

        break
      case 'false':
        errorMsgText.textContent = 'Not a valid email'
        break
      case 'noInput':
        errorMsgText.textContent = 'Please enter an email'
        break
    }
  }

  // Valdate email
  function validateEmail(input) {
    if(input.trim() !== ''){
      const input = email.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValidEmail = input => emailRegex.test(input);

      if (!isValidEmail(input)){
        return 'false'
      }
      return 'true'
    }
    return 'noInput'
  }


  // Post email to api
  const postEmail = (emailInput) => {
    return fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ email: emailInput }),
      mode: 'cors' // Add this line
    }).then(response => {
      if (response.ok) { // Check if response is ok
        console.log('Response:', response);
        return response.status;
      } else {
          throw new Error('Network response was not ok');
      }
    }).catch(error => { // Error handling
      console.error(error);
    });
  };


  return (
    <>
      <form className="form-subscribe" action="">
          <div className="form-subscribe-wrapper">
              <img src='/images/svg/subscribe/email-svgrepo-com.svg' alt="" aria-hidden="true"></img>
              <input id="email-input" type="email" placeholder="Your email" required></input>
          </div>
          <input id="submit" type="submit" value="Subscribe" onClick={handleSubmit}></input>
          <span id="email-error-text"></span>
      </form>
    </>
  );
};