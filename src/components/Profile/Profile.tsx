import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStateType} from '../../redux/state';


type ProfileType = {
    state: RootStateType
    addPost: (postText: string) => void
    message: string
    changeNewText: (newText: string) => void
}


const Profile = (props: ProfileType) => {

    return (
        <section>
            <ProfileInfo avatar={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png'}/>
            <MyPosts posts={props.state.profilePage.posts} message={props.message} addPost={props.addPost} changeNewText={props.changeNewText}/>
        </section>
    );
};

export default Profile;

