import './PopUp.css'

export default function PopUp() {

  function LoginPressed(){
    document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
  }


  return (<>
  
  <div class="login-pop-up">
    <button id="close" class="btn-primary button" onClick={LoginPressed}>X</button>
    <h4>Sign in</h4>
    <form>
        <div>
            <p>Username</p>
            <input type="text"/>
        </div>
        <div>
            <p>Password</p>
            <input type="password"/>
        </div>
        <div className='buttons'>
            <button class="btn btn-md">New user</button>
            <button class="btn btn-md">Sign in</button>
            {/* <input type="submit" value="Sign in" class="btn btn-md"/> */}
        </div>
    </form>
  </div>
  
  </>);
};