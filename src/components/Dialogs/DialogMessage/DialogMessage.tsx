import React from 'react';
import s from './DialogMessage.module.css';


type DialogMessageType = {
    message: string
}


const DialogMessage = (props: DialogMessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};

export default DialogMessage;