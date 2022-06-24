import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';


type DialogsPropsType = {
    props: any
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ];


    let dialogsElements = dialogs.map((el) => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        );
    });

    // Можно поудалять лишнюю разметку, так как здесь будет возвращаться Только ОДИН элемент (компонента), и получиться такая Короткая запись:
    // let dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name}/>);

    let messagesElements = messages.map((el) => {
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