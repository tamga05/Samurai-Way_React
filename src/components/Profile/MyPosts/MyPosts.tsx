import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


type MyPostsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    message: string
    changeNewText: (newText: string) => void
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
        // let text = newPostElement.current?.value;
        // alert(text)
        //
        // if (newPostElement.current) {
        // props.addPost(newPostElement.current.value)
        props.addPost(props.message)

        // }
    }


    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
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
