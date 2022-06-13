import React from 'react';
import Item from './Item/Item';
import s from './List.module.css';


const List = () => {
    return (
        <ul className={s.list}>
            <Item href={'/profile'} title={'Profile'}/>
            <Item href={'/dialogs'} title={'Messages'}/>
            <Item href={'/news'} title={'News'}/>
            <Item href={'/music'} title={'Music'}/>
            <Item href={'/settings'} title={'Settings'}/>

            {/*<li className={`${s.item} ${s.active}`}><a href="#">Messages</a></li>*/}
        </ul>
    );
};

export default List;
