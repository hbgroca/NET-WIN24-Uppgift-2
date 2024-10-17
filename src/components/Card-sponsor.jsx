import '../css/cards.css';
import '../css/sponsors.css';

export default function CardSponsor({ imageUrl, className }) {
  return (
  <>
    <div className={"sponsor-card " + className} >
      <img className='sponsor-img' src={imageUrl} alt="Sponsor image" />
    </div>
  </>);
}