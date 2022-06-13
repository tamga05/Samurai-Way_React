import React from "react";
import s from './Post.module.css';


type PostPropsType = {
    text: string
    likesCount: number
    avatar: string
}

const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.PostWrapper}>
            <img className={s.avatar}
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZDabpYnE3St-xoZZgVSGgRMIn3km-RjzE4YooiGV5R4kklAzNzb8GVZwLGCHzPW4puQ&usqp=CAU"
                 src={props.avatar} alt="avatar"/>
            <div>
                <div className={s.item}>{props.text}</div>
                <div>Likes count: ({props.likesCount})</div>
            </div>
        </div>
    );
}

export default Post;
