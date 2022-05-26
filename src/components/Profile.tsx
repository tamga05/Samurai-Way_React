import React from "react";
import s from './Profile.module.css';


const Profile = () => {
    return (
        <section className={s.content}>
            <img className={s.content__mainImg}
                 src="https://img3.goodfon.ru/wallpaper/nbig/8/f4/tropical-paradise-beach-coast-7511.jpg"
                 alt="paradise"/>
            <div>
                <img className={s.content__bloggerImg}
                     src="https://www.fivesquid.com/pics/t2/1590081886-137937-1-1_236px.jpg" alt="avatar"/>
                <h3>Andrey N.</h3>
                <p>description</p>
            </div>
            <div>
                <h3>My posts</h3>
                <div>New post
                    <textarea name="" id=""></textarea>
                </div>
                <button type='submit'></button>
            </div>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </section>
    );
}

export default Profile;
