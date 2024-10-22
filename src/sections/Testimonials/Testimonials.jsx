import React, { useEffect, useState } from 'react';
import CardTestimonial from './Card-Testimonial';
import './Testimonials.css';

export default function Testimonials() {

  // State for testimonials
  const [testimonials, setTestimonials] = useState([]);

  // Get testimonials from API
  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json()) // Parse JSON
      .then(data => setTestimonials(data)) // Set state
      .catch(error => console.error('Failed to fetch:', error)); // Log potential error
  }, []);


  return (<>
    <div className="reviews">
      <div className="reviews-container container">
          <div className="reviews-header">
              <h2 className="reviews-header-text">Clients are<br /> Loving Our App</h2>
          </div>
          <div className="flex gap-8">
            {testimonials.map((testimonial) => (
                <CardTestimonial 
                  key={testimonial.id}
                  stars={testimonial.starRating}
                  text={testimonial.comment}
                  user={testimonial.author}
                  jobRole={testimonial.jobRole}
                  avatar={testimonial.avatarUrl}
                />))}
          </div>
      </div>
    </div>
  </>);
};