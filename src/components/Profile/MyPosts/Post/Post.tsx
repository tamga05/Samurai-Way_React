import React from "react";
import s from './Post.module.css';


const Post = (props: any) => {
    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZDabpYnE3St-xoZZgVSGgRMIn3km-RjzE4YooiGV5R4kklAzNzb8GVZwLGCHzPW4puQ&usqp=CAU"
                alt="avatar" className={s.avatar}/>
            <div className={s.item}>{props.text}</div>
            <div>Like count: ({props.likeCount})</div>
        </div>
    );
}

export default Post;
