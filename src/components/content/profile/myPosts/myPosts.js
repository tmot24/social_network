import style from "./myPosts.module.css";
import {Post} from "./posts/post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div>
                <Post message={"Hi, how are you?"} likeCount={10}/>
                <Post message={"It's my first post"} likeCount={15}/>
            </div>
        </div>
    );
};