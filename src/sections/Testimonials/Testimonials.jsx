import React, { useContext } from 'react';
import CardTestimonial from './Card-Testimonial';
import './Testimonials.css';
import { Link } from 'react-router-dom';

import { ReviewsProvider } from '../../contexts/ReviewsContext';

export default function Testimonials() {

  // State for testimonials
  const { testimonials } = useContext(ReviewsProvider);

  // Get the two first testiominials
  const testimonialsSliced = testimonials.slice(0, 2);

  return (<>
    <div className="reviews">
      <div className="reviews-container container">
          <div className="reviews-header ">
              <h2 className="reviews-header-text">Clients are<br /> Loving Our App</h2>
              <Link to="/testimonials" className="btn btn-lg">More reviews</Link>
          </div>

          {/* Review cards */}
          <div className="reviews-list">
            {testimonialsSliced.map((testimonial) => (
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