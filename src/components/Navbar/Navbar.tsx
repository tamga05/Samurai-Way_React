import React from 'react';
import s from './Navbar.module.css';
import List from './List/List';
import Item from './List/Item/Item';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <List/>
            <div className={s.friends}>
                <Item href={'/friends'} title={'Friends'}/>
                <div>
                    <div className={s.wrapperNavbarBlock}>
                        <div className={s.wrapperNavbarAvatar}>
                            {/*<img className={s.navbarAvatar} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png"*/}
                            {/*     alt="Andrey-image"/>*/}
                            <img className={s.navbarAvatar}
                                 src="http://sman1kalitidu.sch.id/storage/sman1kalitidu.sch.id/editor/LiFf3LIV4Jcptgo6pUl8zVEnmdmppREOX0xEyeyU.png"
                                 alt="Andrey-image"/>
                            <span className={s.navbarSpan}>Andrey</span>
                        </div>
                        <div className={s.wrapperNavbarAvatar}>
                            <img className={s.navbarAvatar} src="https://www.pngarts.com/files/3/Girl-Avatar-PNG-Download-Image.png"
                                 alt="Sasha-image"/>
                            <span className={s.navbarSpan}>Sasha</span>
                        </div>
                        <div className={s.wrapperNavbarAvatar}>
                            <img className={s.navbarAvatar} src="https://www.pngarts.com/files/3/Employee-Avatar-PNG-Pic.png" alt="Sveta-image"/>
                            <span className={s.navbarSpan}>Sveta</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
