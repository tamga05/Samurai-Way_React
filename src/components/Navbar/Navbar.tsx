import React from 'react';
import s from './Navbar.module.css';
import List from './List/List';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <List/>
        </nav>
    );
};

export default Navbar;
