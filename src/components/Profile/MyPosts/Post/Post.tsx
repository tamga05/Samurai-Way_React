import React from 'react';
import s from './Post.module.css';


type PostType = {
    text: string
    likesCount: number
}


const Post: React.FC<PostType> = (props) => {

    return (
        <div className={s.PostWrapper}>
            <img className={s.avatar} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" alt="avatar-image"/>
            <div>
                <div className={s.item}>{props.text}</div>
                <div>Likes count: (<span className={s.count}> {props.likesCount} </span>)</div>
            </div>
        </div>
    );
};

export default Post;
