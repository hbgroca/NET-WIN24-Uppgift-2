import './PopUp.css'
import '../Buttons/buttons.css'

export default function PopUp() {

  function LoginPressed(){
    document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
  }


  return (<>
  
  <div className="login-pop-up">
    <button id="close" className="btn-sm btn" onClick={LoginPressed}>X</button>
    <h4>Sign in</h4>
    <form>
        <div>
            <p>Username</p>
            <input type="text"/>
        </div>
        <div>
            <p>Password</p>
            <input type="password" autoComplete='true'/>
        </div>
        <div className='buttons'>
            <button className="btn btn-md">New user</button>
            <button className="btn btn-md">Sign in</button>
            {/* <input type="submit" value="Sign in" class="btn btn-md"/> */}
        </div>
    </form>
  </div>
  
  </>);
};