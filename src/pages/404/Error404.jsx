import './Error404.css';

export default function Error404() {

  return (
    <div className="error-page">
      <div className='error-code'>
        <div className='frame x1'>E</div>
        <div className='frame x2'>R</div>
        <div className='frame x3'>R</div>
        <div className='frame x4'>O</div>
        <div className='frame x5'>R</div>
        <div className='frame x6'></div>
        <div className='frame x7'>4</div>
        <div className='frame x8'>0</div>
        <div className='frame x9'>4</div>
      </div>

      <div className="error-msg">
        <p>Page Not Found</p>
      </div>
    </div>
  );
};