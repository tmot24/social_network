import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default_avatar.jpg";

export const Users = ({
                          totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow,
                          users, followingInProgress
                      }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = Array.from({length: pagesCount}, (_, k) => k + 1);

    return (
        <div>
            <div>
                {
                    pages.map(p =>
                        <button key={p} className={currentPage === p ? styles.selectedPage : null}
                                onClick={() => onPageChanged(p)}
                        >{p}</button>
                    )
                }
            </div>
            {
                users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small ? u.photos.small : avatar}
                                         className={styles.userPhoto}
                                         alt={"img"}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={followingInProgress.some(userId => userId === u.id)}
                                              onClick={() => unfollow(u.id)}
                                    >Unfollow</button>
                                    : <button disabled={followingInProgress.some(userId => userId === u.id)}
                                              onClick={() => follow(u.id)}
                                    >Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};