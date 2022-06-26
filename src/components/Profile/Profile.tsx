import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStateType} from '../../redux/state';


type ProfileType = {
    state: RootStateType
}


const Profile = (props: ProfileType) => {

    return (
        <section>
            <ProfileInfo avatar={'https://www.karandash.by/image/design/8455/60.jpg'}/>
            <MyPosts posts={props.state.profilePage.posts}/>
        </section>
    );
};

export default Profile;
