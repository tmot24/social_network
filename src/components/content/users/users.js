import styles from "./users.module.css";
import axios from "axios";
import {useEffect, useState} from "react";

const randomImage = "https://source.unsplash.com/random";

export const Users = ({
                          users,
                          followUnfollow,
                          setUsers,
                          pageSize,
                          totalUsersCount,
                          currentPage,
                          setCurrentPage,
                          setTotalUsersCount
                      }) => {
    const [usersState, setUsersToState] = useState(users);

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                setTotalUsersCount(response.data.totalCount);
            });
    }, [setTotalUsersCount]);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsersToState(response.data.items);
                setUsers(response.data.items);
            });
    }, [currentPage, pageSize, setTotalUsersCount, setUsers]);

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = Array.from({length: pagesCount}, (_, k) => k + 1);

    return (
        <div>
            <div>
                {
                    pages.map(p =>
                        <button key={p} className={currentPage === p ? styles.selectedPage : null}
                                onClick={() => setCurrentPage(p)}
                        >{p}</button>
                    )
                }
            </div>
            {
                usersState.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : randomImage}
                                     className={styles.userPhoto}
                                     alt={"img"}/>
                            </div>
                            <div>
                                <button onClick={() => followUnfollow(u.id)}>
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