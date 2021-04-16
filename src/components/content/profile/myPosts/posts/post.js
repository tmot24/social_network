import style from "./post.module.css";
import avatar from "../../../../../assets/images/default_avatar.jpg"

export const Post = ({message, likesCount}) => {
    return (
        <div className={style.item}>
            <img src={avatar} alt="avatar"/>
            {message}
            <div>
                <span>like: </span>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};