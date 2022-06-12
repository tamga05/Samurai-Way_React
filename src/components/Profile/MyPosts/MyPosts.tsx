import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>My posts
            <NewPost/>
            <Post text={'The sea is cool...'} likesCount={15}
                  avatar={'https://i.pinimg.com/originals/62/f2/03/62f203bea44b49f7b744e956b07f0a6e.jpg'}/>
            <Post text={'Chill out is great!!!'} likesCount={20}
                  avatar={'https://demotivation.ru/wp-content/uploads/2020/06/23c81ce4db3310458b54a9bf30052b04.jpg'}/>
        </div>
    );
}

export default MyPosts;
