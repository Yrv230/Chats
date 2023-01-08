import React from 'react';
import './MyMassage.scss';

const MyMassage = ({ massage }) => {
  return (
    <div className='MyMassage'>
      {
        massage.isImg ?
          <div className="MyMassage__wrapper">
            <span className="MyMassage__time">{massage.time}</span>
            <div className='MyMassage__content isImg'>
              <img src={massage.url} alt='not be found' />
              <p>{massage.massage}</p>
            </div>
          </div>
          :
          <div className="MyMassage__wrapper">
            <span className='MyMassage__time'>{massage.time}</span>
            <div className="MyMassage__content"><p>{massage.massage}</p></div>
          </div>
      }
    </div>
  )
}

export default MyMassage;