import React from "react";
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img}
                 src="https://i.pinimg.com/474x/ce/9a/45/ce9a452aa5398022cd0d373246194fc1.jpg"
                 alt="logotype"/>
        </header>
    );
}

export default Header;
