// Image imports
import signIn from '/images/svg/navbar/Sign-in.svg';
import '../css/BtnSignIn.css'


export default function BtnSignIn(props) {
  return (<>
    <button className="btn-signIn" aria-label="Logga in på ditt konto."><img src={signIn} alt="" /> {props.input}</button>
    </>);
};