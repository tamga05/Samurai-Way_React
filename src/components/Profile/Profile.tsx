import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStateType} from '../../redux/state';


type ProfileType = {
    state: RootStateType
    addPost: (postText: string) => void
}


const Profile = (props: ProfileType) => {

    return (
        <section>
            {/*<ProfileInfo avatar={'https://www.karandash.by/image/design/8455/60.jpg'}/>*/}
            <ProfileInfo avatar={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png'}/>
            <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost}/>
        </section>
    );
};

export default Profile;
