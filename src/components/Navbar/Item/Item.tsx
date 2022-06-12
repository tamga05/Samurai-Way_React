import React from "react";
import s from './Item.module.css';


type ItemPropsType = {
    title: string
    href: string
}


const Item = (props: ItemPropsType) => {
    return (
        <div>
            <li className={s.item}><a href={props.href} className={s.link}>{props.title}</a></li>

            {/*<li className={`${s.item} ${s.active}`}><a href="#">Messages</a></li>*/}
        </div>
    );
};

export default Item;
