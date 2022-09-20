import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import {ActionsType, RootStateType} from '../../redux/state';


type DialogsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}


const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map((el) => {
        return (
            <DialogItem id={el.id} avatar={el.avatar} name={el.name}/>
        );
    });

    let messagesElements = props.state.dialogsPage.messages.map((el) => {
        return (
            <DialogMessage message={el.message} state={props.state} dispatch={props.dispatch}/>
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
