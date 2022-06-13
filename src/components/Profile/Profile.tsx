import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import HeroImage from './HeroImage/HeroImage';


const Profile = () => {

    return (
        <section>
            {/*<HeroImage/>*/}
            <ProfileInfo avatar={'https://www.karandash.by/image/design/8455/60.jpg'}/>
            <MyPosts/>
        </section>
    );
};

export default Profile;
