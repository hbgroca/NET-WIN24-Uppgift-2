export default function BtnStore( {imageUrl}, {ariaLabel} ) {

  return(<>
    <a href="#" className="btn-store" aria-label={ariaLabel}>
        <img src={imageUrl}/>
    </a>
  </>);
};