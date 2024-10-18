export default function CardTestimonial({ stars, text, user, jobRole , avatar}) {

  // Create arrays of filled and empty stars (true/false).
  function starsRating() {
    const filledStars = Array(stars).fill(true);
    const emptyStars = Array(5 - stars).fill(false);
    const allStars = [...filledStars, ...emptyStars];

    // Map through the array and return the correct star image based on there being a true or false value.
    return allStars.map((isFilled, index) => (
      <img key={index} src={isFilled ? "./images/svg/reviews/star.svg" : "./images/svg/reviews/star_empty.svg"} alt={isFilled ? "Stjärna." : "Tom stjärna."}/>
    ));
  }

  return(<>
    <div className="card-review">
      <img className="card-review-quotes" src="./images/svg/reviews/quotes.svg" alt=""/>

      <div className="card-review-stars ">
        {starsRating()}
      </div>
      
      <p>{text}</p>

      <div className="card-review-user">
          <img src={avatar} alt="Användarens avatar."/>
          <div>
              <h3>{user}</h3>
              <p>{jobRole}</p>
          </div>
      </div>
    </div>
  </>);
};