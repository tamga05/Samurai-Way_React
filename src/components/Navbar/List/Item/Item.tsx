import React from 'react';
import s from './Item.module.css';
import {NavLink} from 'react-router-dom';


type ItemPropsType = {
    title: string
    href: string
}


const Item = (props: ItemPropsType) => {
    return (
        <li className={s.item}>
            <NavLink to={props.href} className={s.link} activeClassName={s.activeLink}>{props.title}</NavLink>
        </li>
    );
};

export default Item;
