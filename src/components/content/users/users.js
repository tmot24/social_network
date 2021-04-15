import styles from "./users.module.css";
import axios from "axios";
import {useState} from "react";

const randomImage = "https://source.unsplash.com/random";

export const Users = ({users, followUnfollow, setUsers}) => {
    // const [users, setUsersToState] = useState()

    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    setUsers(response.data.items);
                });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                users.map(u =>
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
                    </div>)
            }
        </div>
    );
};