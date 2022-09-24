import React, {ChangeEvent} from 'react';
import s from './DialogMessage.module.css';
import {StoreType, sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/state';


type DialogMessageType = {
    store: StoreType
    message: string
}


const DialogMessage = (props: DialogMessageType) => {

    let newMessageBody = props.store._state.dialogsPage.newMessageBody;

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
        // let text = newMessageElement.current?.value;
        // alert(text)
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.messageBlock}>
            <div className={s.message}>{props.message}</div>
            {/*<textarea placeholder={'Enter your message'} ref={newMessageElement} onChange={onNewMessageChange}></textarea>*/}
            <textarea value={newMessageBody} placeholder={'Enter your message'} onChange={onNewMessageChange}></textarea>
            <button type="submit" className={s.button} onClick={onSendMessageClick}>Send message</button>
        </div>
    );
};

export default DialogMessage;