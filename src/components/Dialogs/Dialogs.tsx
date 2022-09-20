import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import {ActionsType, StoreType} from '../../redux/state';


type DialogsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}


const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map((el) => {
        return (
            <DialogItem id={el.id} avatar={el.avatar} name={el.name}/>
        );
    });

    let messagesElements = props.store._state.dialogsPage.messages.map((el) => {
        return (
            <DialogMessage store={props.store} dispatch={props.dispatch} message={el.message}/>
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
