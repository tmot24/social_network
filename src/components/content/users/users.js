import {Paginator} from "../common/paginator/paginator";
import {User} from "./user";

export const Users = ({
                          totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow,
                          users, followingInProgress
                      }) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {
                users.map(user => (
                    <div key={user.id}>
                        <User user={user} followingInProgress={followingInProgress}
                              follow={follow} unfollow={unfollow}/>
                    </div>)
                )
            }
        </div>
    );
};