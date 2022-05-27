import React from "react";
import s from './Blogger.module.css';


const Blogger = () => {
    return (
        <div>Blogger
            <img className={s.content__bloggerImg}
                 src="https://www.fivesquid.com/pics/t2/1590081886-137937-1-1_236px.jpg" alt="avatar"/>
            <p>description</p>
        </div>
    );
}

export default Blogger;
