import styles from "./users.module.css";

const randomImage = "https://source.unsplash.com/random";

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
                id: 1,
                followed: false,
                fullName: "Dmitriy",
                status: "I'm a boss",
                location: {city: "Minsk", country: "Belarus"},
                photoUrl: randomImage,
            },
                {
                    id: 2,
                    followed: true,
                    fullName: "Sasha",
                    status: "I'm a boss too",
                    location: {city: "Moscow", country: "Russia"},
                    photoUrl: randomImage,
                },
                {
                    id: 3,
                    followed: false,
                    fullName: "Andrew",
                    status: "I'm a boss too",
                    location: {city: "Kiev", country: "Ukraine"},
                    photoUrl: randomImage,
                },
            ]
        );
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto} alt={"img"}/>
                            </div>
                            <div>
                                <button onClick={() => props.followUnfollow(u.id)}>
                                    {u.followed ? "Unfollow" : "Follow"}
                                </button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
};