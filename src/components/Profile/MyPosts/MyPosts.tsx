import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>My posts
            <NewPost/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;
