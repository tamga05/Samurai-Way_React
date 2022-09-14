import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {ActionsType} from '../../../redux/state';


type MyPostsType = {
    posts: Array<PostType>
    message: string
    dispatch: (action: ActionsType) => void
}

type PostType = {
    id: number
    post: string
    likescount: number
}


const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((el) => {
        return (
            <Post key={el.id} text={el.post} likesCount={el.likescount}/>
        )
    });

    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // props.addPost(props.message)
        props.dispatch({type: 'ADD-POST', postText: props.message})
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changeNewText(e.currentTarget.value)
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder={'Write your story here...'} value={props.message} onChange={newTextChangeHandler}></textarea>
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
