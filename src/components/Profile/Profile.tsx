import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type ProfileType = {
    posts: Array<PostType>
}

type PostType = {
    id: number
    post: string
    likescount: number
}


const Profile = (props: ProfileType) => {

    return (
        <section>
            <ProfileInfo avatar={'https://www.karandash.by/image/design/8455/60.jpg'}/>
            <MyPosts posts={props.posts}/>
        </section>
    );
};

export default Profile;
