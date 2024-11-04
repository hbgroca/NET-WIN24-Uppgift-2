
import React, { useContext, useEffect, useState } from 'react';
import CardTestimonial from '../../sections/Testimonials/Card-Testimonial';
import './TestimonialsPage.css';

import { ReviewsProvider } from '../../contexts/ReviewsContext';

export default function TestimonialsPage() {

  // State for testimonials
  const { testimonials } = useContext(ReviewsProvider);
  const { setTestimonials } = useContext(ReviewsProvider);

  //#region Fake data
  const [names, setNames] = useState([
    { name: 'Albert', boy: true },
    { name: 'John', boy: true },
    { name: 'Jane', boy: false },
    { name: 'Alice', boy: false },
    { name: 'Bob', boy: true },
    { name: 'Charlie', boy: true },
    { name: 'David', boy: true },
    { name: 'Eve', boy: false },
    { name: 'Frank', boy: true },
    { name: 'Grace', boy: false },
    { name: 'Albert', boy: true },
    { name: 'John', boy: true },
    { name: 'Jane', boy: false },
    { name: 'Alice', boy: false },
    { name: 'Bob', boy: true },
    { name: 'Charlie', boy: true },
    { name: 'David', boy: true },
    { name: 'Eve', boy: false },
    { name: 'Frank', boy: true },
    { name: 'Grace', boy: false },
    { name: 'Hannah', boy: false },
    { name: 'Isaac', boy: true },
    { name: 'Jack', boy: true },
    { name: 'Katherine', boy: false },
    { name: 'Liam', boy: true },
    { name: 'Mia', boy: false },
    { name: 'Noah', boy: true },
    { name: 'Olivia', boy: false },
    { name: 'Paul', boy: true },
    { name: 'Quinn', boy: false },
    { name: 'Ryan', boy: true },
    { name: 'Sophia', boy: false },
    { name: 'Thomas', boy: true },
    { name: 'Uma', boy: false },
    { name: 'Mathilda', boy: false },
    { name: 'Vivian', boy: false },
    { name: 'Victor', boy: true },
    { name: 'Walter', boy: true },
    { name: 'Xavier', boy: true },
    { name: 'Yvonne', boy: false },
    { name: 'Zachary', boy: true },
    { name: 'Abigail', boy: false },
    { name: 'Benjamin', boy: true },
    { name: 'Chloe', boy: false },
    { name: 'Daniel', boy: true },
    { name: 'Emily', boy: false },
    { name: 'Frederick', boy: true },
    { name: 'Gabriella', boy: false },
    { name: 'Henry', boy: true },
    { name: 'Isabelle', boy: false },
    { name: 'Jason', boy: true },
    { name: 'Karen', boy: false },
    { name: 'Lucas', boy: true },
    { name: 'Natalie', boy: false },
    { name: 'Oscar', boy: true },
    { name: 'Penelope', boy: false },
    { name: 'Quentin', boy: true },
    { name: 'Rachel', boy: false },
    { name: 'Samuel', boy: true },
    { name: 'Teresa', boy: false },
    { name: 'Ulysses', boy: true },
    { name: 'Veronica', boy: false },
    { name: 'William', boy: true },
    { name: 'Xena', boy: false },
    { name: 'Yusuf', boy: true },
    { name: 'Zoe', boy: false },
    { name: 'Andrew', boy: true },
    { name: 'Brenda', boy: false },
    { name: 'Calvin', boy: true },
    { name: 'Diana', boy: false },
    { name: 'Ethan', boy: true },
    { name: 'Fiona', boy: false },
    { name: 'George', boy: true },
    { name: 'Helena', boy: false },
    { name: 'Ian', boy: true },
    { name: 'Julia', boy: false },
    { name: 'Kyle', boy: true },
    { name: 'Laura', boy: false }
  ]);
  const [lastNames, setLastNames] = useState([
    { lastName: 'Flores' },
    { lastName: 'Doe' },
    { lastName: 'Doe' },
    { lastName: 'Smith' },
    { lastName: 'Johnson' },
    { lastName: 'Brown' },
    { lastName: 'Williams' },
    { lastName: 'Jones' },
    { lastName: 'Garcia' },
    { lastName: 'Martinez' },
    { lastName: 'Hernandez' },
    { lastName: 'Davis' },
    { lastName: 'Lopez' },
    { lastName: 'Gonzalez' },
    { lastName: 'Wilson' },
    { lastName: 'Anderson' },
    { lastName: 'Thomas' },
    { lastName: 'Taylor' },
    { lastName: 'Moore' },
    { lastName: 'Jackson' },
    { lastName: 'Martin' },
    { lastName: 'Lee' },
    { lastName: 'Perez' },
    { lastName: 'Thompson' },
    { lastName: 'White' },
    { lastName: 'Harris' },
    { lastName: 'Sanchez' },
    { lastName: 'Clark' },
    { lastName: 'Ramirez' },
    { lastName: 'Lewis' },
    { lastName: 'Robinson' },
    { lastName: 'Walker' },
    { lastName: 'Young' },
    { lastName: 'Allen' },
    { lastName: 'King' },
    { lastName: 'Wright' },
    { lastName: 'Scott' },
    { lastName: 'Torres' },
    { lastName: 'Nguyen' },
    { lastName: 'Hill' },
    { lastName: 'Green' }
  ]);  
  const [jobs, setJobs] = useState([
    { job: 'Developer' },
    { job: 'Designer' },
    { job: 'Manager' },
    { job: 'Gynecologist' },
    { job: 'Engineer' },
    { job: 'Analyst' },
    { job: 'Consultant' },
    { job: 'Architect' },
    { job: 'Administrator' },
    { job: 'Specialist' },
    { job: 'Coordinator' },
    { job: 'Technician' },
    { job: 'Prostitute' },
    { job: 'Teacher' },
    { job: 'Doctor' },
    { job: 'Nurse' },
    { job: 'Lawyer' },
    { job: 'Chef' },
    { job: 'Accountant' },
    { job: 'Pharmacist' },
    { job: 'Pilot' },
    { job: 'Scientist' },
    { job: 'Journalist' },
    { job: 'Dentist' },
    { job: 'Electrician' },
    { job: 'Plumber' },
    { job: 'Mechanic' },
    { job: 'Firefighter' },
    { job: 'Police Officer' },
    { job: 'Farmer' },
    { job: 'Librarian' },
    { job: 'Actor' },
    { job: 'Musician' },
    { job: 'Software Engineer' },
    { job: 'Data Scientist' },
    { job: 'Project Manager' },
    { job: 'Salesperson' },
    { job: 'Marketing Manager' },
    { job: 'Human Resources Manager' },
    { job: 'Business Analyst' },
    { job: 'Quality Assurance Tester' },
    { job: 'UX/UI Designer' },
    { job: 'Network Administrator' },
    { job: 'Systems Analyst' },
    { job: 'IT Support Specialist' },
    { job: 'Researcher' },
    { job: 'Biologist' },
    { job: 'Chemist' },
    { job: 'Physicist' },
    { job: 'Mathematician' },
    { job: 'Statistician' },
    { job: 'Geologist' }
  ]); 
  const [reviews, setReviews] = useState([
    {review: 'The user interface is very intuitive and easy to navigate. It has made my workflow much more efficient and I highly recommend it to everyone.', starRating: 5},
    {review: 'I found the app to be quite useful, but there are a few bugs that need to be fixed. Overall, it’s a good tool but it could be better.', starRating: 3},
    {review: 'This app has a lot of potential, but it currently lacks some essential features. I hope the developers will address these issues soon.', starRating: 2},
    {review: 'I am not very satisfied with this app. It crashes frequently and the support team is not very responsive. Needs a lot of improvement.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks. There are a few minor issues, but nothing major.', starRating: 4},
    {review: 'This app is a game-changer! It has streamlined my workflow and made my life so much easier. Highly recommended!', starRating: 5},
    {review: 'I like the app, but it could use some improvements. Some features are a bit clunky and not very user-friendly.', starRating: 3},
    {review: 'The app is okay, but it lacks some important features that I need for my daily tasks. Hope they add them soon.', starRating: 2},
    {review: 'Not impressed with this app. It crashes often and the interface is not intuitive. Needs a lot of work.', starRating: 1},
    {review: 'Fantastic app! It has everything I need and more. The developers did a great job with this one.', starRating: 5},
    {review: 'The app is pretty good, but there are a few bugs that need to be fixed. Overall, it’s a decent tool.', starRating: 3},
    {review: 'I see potential in this app, but it’s not quite there yet. It needs more features and better stability.', starRating: 2},
    {review: 'Very disappointed with this app. It’s slow, buggy, and the support team is unresponsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is amazing! It has completely transformed the way I manage my daily tasks. Highly recommend it!', starRating: 5},
    {review: 'The app is useful, but it has some performance issues. It can be slow at times, which is frustrating.', starRating: 3},
    {review: 'I like the concept of this app, but it needs more polish. Some features are not very well implemented.', starRating: 2},
    {review: 'Not a fan of this app. It’s hard to use and doesn’t have the features I need. Would not recommend.', starRating: 1},
    {review: 'Excellent app! It’s very user-friendly and has all the features I need. Great job by the developers.', starRating: 5},
    {review: 'The app is decent, but it could be better. There are a few bugs that need to be addressed.', starRating: 3},
    {review: 'This app has potential, but it’s not quite there yet. It needs more features and better performance.', starRating: 2},
    {review: 'Very disappointed with this app. It’s slow, buggy, and the support team is unresponsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is amazing! It has completely transformed the way I manage my daily tasks. Highly recommend it!', starRating: 5},
    {review: 'The app is useful, but it has some performance issues. It can be slow at times, which is frustrating.', starRating: 3},
    {review: 'I like the concept of this app, but it needs more polish. Some features are not very well implemented.', starRating: 2},
    {review: 'Not a fan of this app. It’s hard to use and doesn’t have the features I need. Would not recommend.', starRating: 1},
    {review: 'Excellent app! It’s very user-friendly and has all the features I need. Great job by the developers.', starRating: 5},
    {review: 'The app is decent, but it could be better. There are a few bugs that need to be addressed.', starRating: 3},
    {review: 'This app has potential, but it’s not quite there yet. It needs more features and better performance.', starRating: 2},
    {review: 'This app is incredibly useful and has made my life so much easier. I can’t imagine going back to how I used to do things.', starRating: 5},
    {review: 'The app is good, but it has some bugs that need to be fixed. Overall, it’s a decent tool.', starRating: 3},
    {review: 'I think this app has potential, but it’s not quite there yet. It needs more features and better stability.', starRating: 2},
    {review: 'I’m not very happy with this app. It crashes frequently and the support team is not very responsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is a game-changer! It has streamlined my workflow and made my life so much easier. Highly recommended!', starRating: 5},
    {review: 'I like the app, but it could use some improvements. Some features are a bit clunky and not very user-friendly.', starRating: 3},
    {review: 'The app is okay, but it lacks some important features that I need for my daily tasks. Hope they add them soon.', starRating: 2},
    {review: 'Not impressed with this app. It crashes often and the interface is not intuitive. Needs a lot of work.', starRating: 1},
    {review: 'Fantastic app! It has everything I need and more. The developers did a great job with this one.', starRating: 5},
    {review: 'The app is pretty good, but there are a few bugs that need to be fixed. Overall, it’s a decent tool.', starRating: 3},
    {review: 'I see potential in this app, but it’s not quite there yet. It needs more features and better stability.', starRating: 2},
    {review: 'Very disappointed with this app. It’s slow, buggy, and the support team is unresponsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is amazing! It has completely transformed the way I manage my daily tasks. Highly recommend it!', starRating: 5},
    {review: 'The app is useful, but it has some performance issues. It can be slow at times, which is frustrating.', starRating: 3},
    {review: 'I like the concept of this app, but it needs more polish. Some features are not very well implemented.', starRating: 2},
    {review: 'Not a fan of this app. It’s hard to use and doesn’t have the features I need. Would not recommend.', starRating: 1},
    {review: 'Excellent app! It’s very user-friendly and has all the features I need. Great job by the developers.', starRating: 5},
    {review: 'The app is decent, but it could be better. There are a few bugs that need to be addressed.', starRating: 3},
    {review: 'This app has potential, but it’s not quite there yet. It needs more features and better performance.', starRating: 2},
    {review: 'Very disappointed with this app. It’s slow, buggy, and the support team is unresponsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is amazing! It has completely transformed the way I manage my daily tasks. Highly recommend it!', starRating: 5},
    {review: 'The app is useful, but it has some performance issues. It can be slow at times, which is frustrating.', starRating: 3},
    {review: 'I like the concept of this app, but it needs more polish. Some features are not very well implemented.', starRating: 2},
    {review: 'Not a fan of this app. It’s hard to use and doesn’t have the features I need. Would not recommend.', starRating: 1},
    {review: 'Excellent app! It’s very user-friendly and has all the features I need. Great job by the developers.', starRating: 5},
    {review: 'The app is decent, but it could be better. There are a few bugs that need to be addressed.', starRating: 3},
    {review: 'This app has potential, but it’s not quite there yet. It needs more features and better performance.', starRating: 2},
    {review: 'This app is incredibly useful and has made my life so much easier. I can’t imagine going back to how I used to do things.', starRating: 5},
    {review: 'The app is good, but it has some bugs that need to be fixed. Overall, it’s a decent tool.', starRating: 3},
    {review: 'I think this app has potential, but it’s not quite there yet. It needs more features and better stability.', starRating: 2},
    {review: 'I’m not very happy with this app. It crashes frequently and the support team is not very responsive.', starRating: 1},
    {review: 'Great app with a lot of useful features. It has helped me stay organized and on top of my tasks.', starRating: 4},
    {review: 'This app is a game-changer! It has streamlined my workflow and made my life so much easier. Highly recommended!', starRating: 5},
  ]);
  const memojis = [{
    boys: [
      '/images/memojis/boys/1.png',
      '/images/memojis/boys/2.png',
      '/images/memojis/boys/3.png',
      '/images/memojis/boys/4.png',
      '/images/memojis/boys/5.png',
      '/images/memojis/boys/6.png',
      '/images/memojis/boys/7.png',
      '/images/memojis/boys/8.png',
      '/images/memojis/boys/9.png',
      '/images/memojis/boys/10.png',
      '/images/memojis/boys/11.png',
      '/images/memojis/boys/12.png',
      '/images/memojis/boys/13.png',
      '/images/memojis/boys/14.png',
      '/images/memojis/boys/15.png',
      '/images/memojis/boys/16.png',
      '/images/memojis/boys/17.png',
      '/images/memojis/boys/18.png',
      '/images/memojis/boys/19.png',
      '/images/memojis/boys/20.png',
      '/images/memojis/boys/21.png',
      '/images/memojis/boys/22.png',
      '/images/memojis/boys/23.png',
      '/images/memojis/boys/24.png',
      '/images/memojis/boys/25.png',
    ]}, {
      girls: [
        '/images/memojis/girls/1.png',
        '/images/memojis/girls/2.png',
        '/images/memojis/girls/3.png',
        '/images/memojis/girls/4.png',
        '/images/memojis/girls/5.png',
        '/images/memojis/girls/6.png',
        '/images/memojis/girls/7.png',
        '/images/memojis/girls/8.png',
        '/images/memojis/girls/9.png',
        '/images/memojis/girls/10.png',
        '/images/memojis/girls/11.png',
        '/images/memojis/girls/12.png',
        '/images/memojis/girls/13.png',
        '/images/memojis/girls/14.png',
        '/images/memojis/girls/15.png',
        '/images/memojis/girls/16.png',
        '/images/memojis/girls/17.png',
      ]} ]
  //#endregion

  // Go to top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddFakeTestimonial = () => {
    setTestimonials([...testimonials, ...addFakeTestimonial(3)]);
  }

  // Add fake testimonial
  const addFakeTestimonial = (amount) => { 
    // Fake data
    let fakeUsers = [];

    // Add fake testimonial to the list
    for (let i = 0; i < amount; i++) {
      const nameNr = Math.floor(Math.random() * names.length)
      const reviewNr = Math.floor(Math.random() * reviews.length)
      const fakeUser = {
        id: crypto.randomUUID(),
        author: `${names[nameNr].name} ${lastNames[Math.floor(Math.random() * lastNames.length)].lastName}`,
        jobRole: jobs[Math.floor(Math.random() * jobs.length)].job,
        starRating: reviews[reviewNr].starRating,
        avatarUrl: `${names[nameNr].boy ? `${memojis[0].boys[Math.floor(Math.random() * memojis[0].boys.length)]}` : `${memojis[1].girls[Math.floor(Math.random() * memojis[1].girls.length)]}`}`,
        comment: reviews[reviewNr].review,
      };

      // Add fake user to the list
      fakeUsers.push(fakeUser);
    }

    // Return fake users
    return fakeUsers;
  };


  return (<>
  <div className="header">
    <div className="reviews-header">
      <div className='reviews-header-text flex'>
        <img img src='../images/svg/reviews/star.svg'></img>
        <h2 className="reviews-header-text">Number 1 app </h2>
      </div>
      <h3>According to our custumer reviews we have the best app in the world, and we all know that the custumer is always right.</h3>
    </div>
  </div>

  <div className="reviewsPage">
      <div className="reviews-container container">
          
          <div className="reviews-card-wrapper ">
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

      <div className='getMore-wrapper' onClick={() => handleAddFakeTestimonial(3)}>
        <div className=''>💦</div>
        <p>Get more juicy reviews</p> 
      </div>
    </div>
  </>);
};