import React from "react";
import Button from "./Button/Button";


const NewPost = () => {
    return (
        <div>
            <h4>New post</h4>
            <textarea id="" name="" placeholder={'Write your story here...'}></textarea>
            <Button value={'Add post'}/>
            <Button value={'Delete post'}/>
        </div>
    );
}

export default NewPost;
