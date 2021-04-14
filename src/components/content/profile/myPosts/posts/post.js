import style from "./post.module.css";

export const Post = ({message, likesCount}) => {
    return (
        <div className={style.item}>
            <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/11138/111385676/7212562-5667359844-41703.jpg" alt="avatar"/>
            {message}
            <div>
                <span>like: </span>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};