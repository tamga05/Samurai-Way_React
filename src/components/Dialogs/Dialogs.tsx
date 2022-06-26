import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import {RootStateType} from '../../redux/state';


type DialogsType = {
    state: RootStateType
}


const Dialogs = (props: DialogsType) => {


    let dialogsElements = props.state.dialogsPage.dialogs.map((el) => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        );
    });

    // Можно удалить лишнюю разметку, так как в этой константе будет возвращаться Только ОДИН элемент (компонента), и получиться такая Короткая запись:
    // let dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>);

    let messagesElements = props.state.dialogsPage.messages.map((el) => {
        return (
            <DialogMessage message={el.message}/>
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
