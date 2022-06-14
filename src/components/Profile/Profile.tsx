import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    return (
        <section>
            <ProfileInfo avatar={'https://www.karandash.by/image/design/8455/60.jpg'}/>
            <MyPosts/>
        </section>
    );
};

export default Profile;
