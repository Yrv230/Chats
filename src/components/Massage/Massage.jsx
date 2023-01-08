import React from 'react';
import './Massage.scss';

const Massage = ({ massage }) => {
  return (
    <div className='Massage'>
      {
        massage.isImg ?
          <div className="Massage__wrapper">
            <div className='Massage__content isImg'>
              <img src={massage.url} alt='not be found' />
              <p>{massage.massage}</p>
            </div>
            <span className="Massage__time">{massage.time}</span>
          </div>
          :
          <div className="Massage__wrapper">
            <div className="Massage__content"><p>{massage.massage}</p></div>
            <span className='Massage__time'>{massage.time}</span>
          </div>
      }
    </div>
  );
}

export default Massage;