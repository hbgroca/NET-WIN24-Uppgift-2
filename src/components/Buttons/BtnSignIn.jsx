// Image imports
import signIn from '/images/svg/navbar/Sign-in.svg';
import './BtnSignIn.css'


export default function BtnSignIn(props) {

  function LoginPressed(){
    document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
  }

  return (<>
    <button className="btn-signIn" aria-label="Sign in to your account." onClick={LoginPressed}><img src={signIn} alt="" /> {props.input}</button>
    </>);
};