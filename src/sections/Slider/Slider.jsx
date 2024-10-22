import './Slider.css';

export default function Slider() {

// Slider (Start value  = 2)
let sliderNr = 2;

function sliderPressed(e){
  const imgCont = document.querySelector('.slider-img-container');
  let selected;

  // Check which button was pressed
    switch(e.target.id){
      case 'slider-left':
        selected = 1;
          break;
      case 'slider-middle':
        selected = 2;
          break;
      case 'slider-right':
        selected = 3;
          break;
      default:  selected = 2; break;
    }
    // Check if the selected button is the same as the current slider
    if(selected == sliderNr){
        selected++;
        if (selected > 3){ selected = 1}
    }

    // Change the slider
    imgCont.classList.remove('img-left');
    imgCont.classList.remove('img-right');
    if(selected == '1'){
      sliderNr = 1;
      imgCont.classList.add('img-left');
      imgCont.nextElementSibling.firstElementChild.innerHTML = 'Latest transaction history';
      imgCont.nextElementSibling.lastElementChild.innerHTML = 'Here you get a quick overview of your latest payments and transfers. Easily keep track of your expenses and income directly in the app, so you always have full control over your finances.';
    }
    if(selected == '2'){
        sliderNr = 2;
        imgCont.nextElementSibling.firstElementChild.innerHTML = 'Transfers to people from your contact list';
        imgCont.nextElementSibling.lastElementChild.innerHTML = 'With our app, you can easily transfer money directly to people in your phone list. You don’t have to manually enter account numbers, just select a contact and send money in a few seconds. Convenient, fast, and secure!';
    }
    if(selected == '3'){
        imgCont.classList.add('img-right');
        sliderNr = 3;
        imgCont.nextElementSibling.firstElementChild.innerHTML = 'Make quick transfers and keep full track of the history';
        imgCont.nextElementSibling.lastElementChild.textContent = 'With our app, you can make quick transfers and keep full track of your transaction history. Manage your payments with just a few clicks and see detailed information about previous transactions to always have your finances under control.';
    }
}

  return(<>
    <div id="Info" className="slider">
      <div className="slider-container container">
        <h2 className="slider-container-header">How Does It Work?</h2>
        <div className="slider-img-container">
            <button className="slider-img-container-img-1" id='slider-left' onClick={sliderPressed} aria-label="Tryck för mer information kring transaktionshistorik."></button>
            <button className="slider-img-container-img-2" id='slider-middle' onClick={sliderPressed} aria-label="Tryck för mer information kring överföringar."></button>
            <button className="slider-img-container-img-3" id='slider-right' onClick={sliderPressed} aria-label="Tryck för mer information."></button>
            <span className="slider-img-container-frame" aria-hidden="true"></span>
        </div>
        <div className="slider-container-text">
          <h5>Transfers to people from your contact list</h5>
          <p>`With our app, you can easily transfer money directly to people in your phone list. You don’t have to manually enter account numbers, just select a contact and send money in a few seconds. Convenient, fast, and secure!`</p>
        </div>
      </div>
    </div>
  </>);
};