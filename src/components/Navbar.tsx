import React from "react";
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <a href="#">
                    <li className={s.item}> Profile</li>
                </a>
                <a href="#">
                    <li className={s.item}>Messages</li>
                </a>
                <a href="#">
                    <li className={s.item}>News</li>
                </a>
                <a href="#">
                    <li className={s.item}>Music</li>
                </a>
                <a href="#">
                    <li className={s.item}>Settings</li>
                </a>
            </ul>
        </nav>
    );
}

export default Navbar;
