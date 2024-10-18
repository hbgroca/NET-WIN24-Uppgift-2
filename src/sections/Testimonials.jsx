import React, { useEffect, useState } from 'react';
import CardTestimonial from '../components/Card-Testimonial';
import '../css/Testimonials.css';

export default function Testimonials() {

  // State for testimonials
  const [testimonials, setTestimonials] = useState([]);

  // Get testimonials from API
  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Failed to fetch:', error));
  }, []);


  return (<>
    <div className="reviews">
      <div className="reviews-container container">
          <div className="reviews-header">
              <h2 className="reviews-header-text">Clients are<br></br> Loving Our App</h2>
          </div>
          <div className="flex gap-8">
            {testimonials.map((testimonial, index) => {
              return (
                <CardTestimonial 
                  key={index}
                  stars={testimonial.starRating}
                  text={testimonial.comment}
                  user={testimonial.author}
                  jobRole={testimonial.jobRole}
                  avatar={testimonial.avatarUrl}
                />)})}
          </div>
      </div>
    </div>
  </>);
};