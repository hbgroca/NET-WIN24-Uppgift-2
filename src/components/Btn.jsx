// Image imports
import signIn from '/images/svg/navbar/Sign-in.svg';
import '../css/Btn.css'


export default function BtnSignIn(props) {
  return (<>
    <button className="btn" aria-label="Logga in på ditt konto."><img src={signIn} alt="" /> {props.input}</button>
    </>);
};