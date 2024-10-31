import CardSponsor from "./Card-sponsor";
import './sponsors.css';
import '../../css/cards.css';

export default function Sponsors() {
  return(
    <>
    <div className="sponsors container">
      <CardSponsor className="card-1" imageUrl='../images/svg/sponsors/logoipsum.svg' />
      <CardSponsor className="card-2" imageUrl='../images/svg/sponsors/logoipsum-1.svg' />
      <CardSponsor className="card-3" imageUrl='../images/svg/sponsors/logoipsum-2.svg' />
      <CardSponsor className="card-4" imageUrl='../images/svg/sponsors/logoipsum-3.svg' />
      <CardSponsor className="card-5" imageUrl='../images/svg/sponsors/logoipsum-4.svg' />
      <CardSponsor className="card-6" imageUrl='../images/svg/sponsors/logoipsum-5.svg' />
    </div>
  </>
  );  
};