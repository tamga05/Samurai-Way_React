import React from "react";
import Item from "../Item/Item";


const List = () => {
    return (
        <ul>
            <Item title={'Profile'}/>
            <Item title={'Messages'}/>
            {/*<li className={`${s.item} ${s.active}`}><a href="#">Messages</a></li>*/}
            <Item title={'News'}/>
            <Item title={'Music'}/>
            <Item title={'Settings'}/>
        </ul>
    );
}

export default List;
