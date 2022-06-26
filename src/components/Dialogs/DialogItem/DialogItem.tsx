import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';


type DialogItemType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemType) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <img className={s.dialogAvatar}
                 src="https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@c6cae1948b/https://s52.impactinit.com/smsimg30//pv/ingimagecontributors/ing_47129_23497.jpg"
                 alt="avatar"/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;