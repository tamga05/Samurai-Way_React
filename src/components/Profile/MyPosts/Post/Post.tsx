import React from 'react';
import s from './Post.module.css';


type PostPropsType = {
    text: string
    likesCount: number
    // avatar: string
}


const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.PostWrapper}>
            <img className={s.avatar} src="https://i.pinimg.com/originals/62/f2/03/62f203bea44b49f7b744e956b07f0a6e.jpg" alt="avatar"/>
            <div>
                <div className={s.item}>{props.text}</div>
                <div>Likes count: ({props.likesCount})</div>
            </div>
        </div>
    );
};

export default Post;
