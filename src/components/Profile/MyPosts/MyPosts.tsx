import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './MyPosts.module.css';


type MyPostsType = {
    posts: Array<PostType>
}

type PostType = {
    id: number
    post: string
    likescount: number
}


const MyPosts = (props: MyPostsType) => {


    let postsElements = props.posts.map((el) => {
        return (
            <Post text={el.post} likesCount={el.likescount}/>
        );
    });


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPost/>
            {postsElements}
        </div>
    );
};

export default MyPosts;
