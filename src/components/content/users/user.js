import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default_avatar.jpg";
import styles from "./users.module.css";


export const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : avatar}
                             className={styles.userPhoto}
                             alt={"img"}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => unfollow(user.id)}
                        >Unfollow</button>
                        : <button disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => follow(user.id)}
                        >Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
    );
};