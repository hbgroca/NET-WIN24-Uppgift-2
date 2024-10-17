import '../css/cards.css';

export default function CardSponsor({ imageUrl }) {
  return (<>
  <div className="sponsor-card">
    <img className='sponsor-img' src={imageUrl} alt="Sponsor image" />
  </div>
    
    </>);
}