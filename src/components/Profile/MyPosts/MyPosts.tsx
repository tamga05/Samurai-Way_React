import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>My posts
            <NewPost/>
            <Post text={'The sea is cool...'} likeCount={15}/>
            <Post text={'Chill out is great!!!'} likeCount={20}/>
        </div>
    );
}

export default MyPosts;
