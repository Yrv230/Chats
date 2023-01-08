import React, { useState } from 'react';
import './ChatModal.scss';

const ChatModal = ({ massages, setMassages, modal, handleCloseModal, chat }) => {
    const [urlValue, setUrlValue] = useState('');
    const [value, setValue] = useState('');

    const onChangeUrlValue = e => {
        setUrlValue(e.target.value);
    }

    const onChangeValue = e => {
        setValue(e.target.value);
    }

    const sendImg = e => {
        e.preventDefault();

        const newImg = {
            chat,
            id: Math.random().toString(36).substring(2, 9),
            isImg: true,
            url: urlValue,
            massage: value,
            time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`,
        }

        setMassages([...massages, newImg]);
        setUrlValue('');
        setValue('');

        handleCloseModal();
    }

    return (
        <div className={modal ? 'Modal active' : 'Modal'}>
            <div className="Modal__wrapper">
                <h2 className="Modal__title">Отправить картинку</h2>
                <form action="" className="Modal__form">
                    <div className="Modal__group">
                        <input type="text" 
                            value={urlValue}
                            onChange={onChangeUrlValue}
                            required
                        />
                        <label>URL</label>
                    </div>
                    <div className="Modal__group">
                        <input type="text" 
                            value={value}
                            onChange={onChangeValue}
                            required
                        />
                        <label>Комментарий</label>
                    </div>
                </form>
                <div className="Modal__btns">
                    <button onClick={handleCloseModal}>Отмена</button>
                    <button onClick={sendImg}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ChatModal;