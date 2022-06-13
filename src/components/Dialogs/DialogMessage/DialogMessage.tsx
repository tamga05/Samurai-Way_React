import React from 'react';
import s from './DialogMessage.module.css';


type DialogMessagePropsType = {
    message: string
}

const DialogMessage = (props: DialogMessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};

export default DialogMessage;