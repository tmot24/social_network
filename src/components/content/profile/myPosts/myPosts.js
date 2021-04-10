import style from "./myPosts.module.css";
import {Post} from "./posts/post";

export const MyPosts = ({dataPosts}) => {

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {
                    dataPosts.map(elem => <Post key={elem.id} message={elem.text} likeCount={elem.likesCount}/>)
                }
            </div>
        </div>
    );
};