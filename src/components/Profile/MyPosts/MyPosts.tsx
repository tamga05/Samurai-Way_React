import React from 'react';
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


    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder={'Write your story here...'}></textarea>
                </div>
                <div>
                    <button type="submit" className={s.button} onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;
