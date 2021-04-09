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
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post"}/>
            </div>
        </div>
    );
};