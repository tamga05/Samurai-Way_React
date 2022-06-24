import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';


type DialogItemPropsType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemPropsType) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;