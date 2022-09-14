import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, RootStateType} from '../../redux/state';


type ProfileType = {
    state: RootStateType
    message: string
    dispatch: (action: ActionsType) => void
}


const Profile = (props: ProfileType) => {
    return (
        <section>
            <ProfileInfo avatar={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png'}/>
            {/*<MyPosts posts={props.state.profilePage.posts} message={props.message} addPost={props.addPost} changeNewText={props.changeNewText}/>*/}
            <MyPosts posts={props.state.profilePage.posts} message={props.message} dispatch={props.dispatch}/>
        </section>
    );
};

export default Profile;

