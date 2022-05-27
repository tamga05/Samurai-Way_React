import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Blogger from "./Blogger/Blogger";
import HeroImage from "./HeroImage/HeroImage";


const Profile = () => {
    return (
        <section className={s.content}>
            <HeroImage/>
            <Blogger/>
            <MyPosts/>
        </section>
    );
}

export default Profile;
