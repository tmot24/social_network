import styles from "./users.module.css";

export const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, isFollow, users}) => {

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
                                <img src={u.photos.small ? u.photos.small : "https://source.unsplash.com/random"}
                                     className={styles.userPhoto}
                                     alt={"img"}/>
                            </div>
                            <div>
                                <button onClick={() => isFollow(u.id)}>
                                    {u.followed ? "Unfollow" : "Follow"}
                                </button>
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