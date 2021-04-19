import style from "./myPosts.module.css";
import {Post} from "./posts/post";
import {AddMessageForm} from "../../addMessageForm/addMessageForm";

export const MyPosts = ({posts, addPost}) => {
    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddMessageForm sendMessage={addPost}/>
            </div>
            <div className={style.posts}>
                {
                    posts.map(elem => <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>)
                }
            </div>
        </div>
    );
};