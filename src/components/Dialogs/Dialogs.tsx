import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import {StoreType} from '../../redux/state';


type DialogsType = {
    store: StoreType
}


const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map((el) => {
        return (
            <DialogItem id={el.id} avatar={el.avatar} name={el.name}/>
        );
    });

    let messagesElements = props.store._state.dialogsPage.messages.map((el) => {
        return (
            <DialogMessage store={props.store} message={el.message}/>
        );
    });


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
