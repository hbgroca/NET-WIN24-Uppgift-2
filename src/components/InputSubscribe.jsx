export default function InputSubscribe() {

  return (
    <>
      <form className="form-subscribe" action="">
          <div className="form-subscribe-wrapper">
              <img src='/images/svg/subscribe/email-svgrepo-com.svg' alt="" aria-hidden="true"></img>
              <input id="email-input" type="email" placeholder="Your email" required></input>
          </div>
          <input type="submit" value="Subscribe"></input>
      </form>
    </>
  );
};