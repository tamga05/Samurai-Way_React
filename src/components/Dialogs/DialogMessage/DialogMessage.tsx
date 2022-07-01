import React from 'react';
import s from './DialogMessage.module.css';


type DialogMessageType = {
    message: string
}


const DialogMessage = (props: DialogMessageType) => {


    let newMessageElement = React.createRef<HTMLTextAreaElement>()


    const addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
    }


    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button type="submit" className={s.button} onClick={addMessage}>Send message</button>
        </div>

    );
};

export default DialogMessage;