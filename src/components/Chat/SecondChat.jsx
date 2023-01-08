import React, { useState } from 'react';
import SvgIcons from '../../assets/icons/SvgIcons';
import Avatar from '../../assets/img/avatar-2.png';
import ChatModal from '../ChatModal/ChatModal';
import Massage from '../Massage/Massage';
import MyMassage from '../MyMassage/MyMassage';
import './Chat.scss';

const SecondChat = ({ massages, setMassages }) => {
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);

  const onChangeValue = e => {
    setValue(e.target.value);
  }

  const sendMassage = e => {
    e.preventDefault();

    const newMssage = {
      chat: 2,
      id: Math.random().toString(36).substring(2, 9),
      massage: value,
      time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
    }

    setMassages([...massages, newMssage]);
    setValue('');
  }

  const handleOpenModal = () => {
    setModal(!modal);
  }

  return (
    <div className='Chat'>
      <div className="Chat__header">
        <img src={Avatar} alt="" className="Chat__logo" />
        <h2 className="Chat__name">
          Евгений
          <span>Онлайн</span>
        </h2>
      </div>

      <div className="Chat__content">
        {
          massages.map(item =>
            item.chat === 2 ?
              <MyMassage
                key={item.id}
                massage={item}
              />
              :
              <Massage
                key={item.id}
                massage={item}
              />
          )
        }
      </div>

      <div className="Chat__input">
        <input
          type="text"
          placeholder='Напишите сообщение...'
          value={value}
          onChange={onChangeValue}
        />
        {
          value ?
            <button onClick={sendMassage}>
              <SvgIcons id='send' />
            </button>
            :
            <button onClick={handleOpenModal}>
              <SvgIcons id='photo' />
            </button>
        }
      </div>

      <ChatModal
        massages={massages}
        setMassages={setMassages}
        modal={modal}
        handleCloseModal={handleOpenModal}
        chat={2}
      />
    </div>
  )
}

export default SecondChat;