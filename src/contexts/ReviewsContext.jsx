import React, { createContext, useState, useEffect } from 'react';

export const ReviewsProvider = createContext();

const ReviewsContext = ({ children }) => { 
  // State for testimonials
  const [testimonials, setTestimonials] = useState([{
    id: crypto.randomUUID(),
    author: `Bengan Bengtsson`,
    jobRole: 'Theif',
    starRating: 3,
    avatarUrl: '/images/svg/reviews/Jajjor2.png',
    comment: 'I do scetchy stuff for a living and this app has made it easier to keep track of my money. Great work!'
    },
    {
    id: crypto.randomUUID(),
    author: `J. Jockesson`,
    jobRole: 'Developer',
    starRating: 5,
    avatarUrl: '/images/svg/reviews/Jocke.png',
    comment: 'This finance app is fantastic! The interface is sleek and user-friendly, making it easy to track expenses, set budgets, and monitor investments. Highly recommended!'
    },
    {
      id: crypto.randomUUID(),
      author: 'Georgi Georgiev',
      jobRole: 'Engineer',
      starRating: 4,
      avatarUrl: '/images/svg/reviews/Gogge.png',
      comment: 'This app has greatly improved my workflow. Highly recommended!'
    },
    {
    id: crypto.randomUUID(),
    author: `Hasse Ohlsson`,
    jobRole: 'Developer',
    starRating: 5,
    avatarUrl: '/images/svg/reviews/Hasse.png',
    comment: 'This finance app is a game-changer! It has transformed the way I manage my finances. The user interface is intuitive, and the features are incredibly useful. Highly recommended!'
    }
  ]);

  // Get testimonials from API
  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json()) // Parse JSON
      .then(data => data) // Set state
      .then(result => {
        setTestimonials([...result, ...testimonials]);
      })
      .catch(error => console.error('Failed to fetch:', error)); // Log potential error
  }, []);

  return (
    <ReviewsProvider.Provider value={{ testimonials, setTestimonials }}>
      {children}
    </ReviewsProvider.Provider>
  );
}

export default ReviewsContext;