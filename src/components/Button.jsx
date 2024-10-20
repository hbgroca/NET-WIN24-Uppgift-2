import '../css/Button.css'


export default function Button(props) {

  function test() {
    console.log("test");
  }
  
  return (<>
      <button className={props.classes + " button"} onClick={props.click}>{props.text}</button>
    </>);
};