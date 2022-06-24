import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () => {


    let posts = [
        {id: 1, post: 'The sea is cool...', likescount: 15},
        {id: 2, post: 'Chill out is great !!!', likescount: 18},
        {id: 3, post: 'Life is Beautiful !!!', likescount: 20}
    ];


    let postsElements = posts.map((el) => {
        return (
            <Post text={el.post} likesCount={el.likescount}/>
        );
    });


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <NewPost/>
            {postsElements}

            {/*avatar={'https://i.pinimg.com/originals/62/f2/03/62f203bea44b49f7b744e956b07f0a6e.jpg'}*/}
            {/*avatar={'https://demotivation.ru/wp-content/uploads/2020/06/23c81ce4db3310458b54a9bf30052b04.jpg'}*/}
        </div>
    );
};

export default MyPosts;
