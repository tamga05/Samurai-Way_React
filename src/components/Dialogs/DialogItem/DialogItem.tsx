import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';


type DialogItemType = {
    id: number
    name: string
    avatar: string
}


const DialogItem = (props: DialogItemType) => {


    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <img className={s.dialogAvatar} src={props.avatar} alt="avatar"/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;