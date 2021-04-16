import style from "./myPosts.module.css";
import {Post} from "./posts/post";

export const MyPosts = ({posts}) => {

    const addPost = () => alert("Hey");

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    posts.map(elem => <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>)
                }
            </div>
        </div>
    );
};