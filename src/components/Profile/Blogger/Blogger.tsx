import React from 'react';
import s from './Blogger.module.css';


type BloggerPropsType = {
    avatar: string
}


const Blogger: React.FC<BloggerPropsType> = (props) => {
    return (
        <div>Blogger
            <div><img className={s.content__bloggerImg} src={props.avatar} alt="avatar"/></div>
            <p>About the blogger...</p>
        </div>
    );
};

export default Blogger;
