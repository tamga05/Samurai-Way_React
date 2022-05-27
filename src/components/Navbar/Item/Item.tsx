import React from "react";
import s from './Item.module.css';


const Item = (props: any) => {
    return (
        <div>
            <li className={s.item}><a href="#" className={s.link}>{props.title}</a></li>

            {/*<li className={`${s.item} ${s.active}`}><a href="#">Messages</a></li>*/}

            {/*<li className={s.item}><a href="#">News</a></li>*/}
            {/*<li className={s.item}><a href="#">Music</a></li>*/}
            {/*<li className={s.item}><a href="#">Settings</a></li>*/}
        </div>
    );
}

export default Item;
