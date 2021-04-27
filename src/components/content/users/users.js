import {Paginator} from "../common/paginator/paginator";
import {User} from "./user";
import {Grid} from "@material-ui/core";

export const Users = ({
                          totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow,
                          users, followingInProgress
                      }) => {

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <Grid container style={{justifyContent: "center"}}>
                {
                    users.map(user => (
                            <User key={user.id} user={user} followingInProgress={followingInProgress}
                                         follow={follow} unfollow={unfollow}/>
                        )
                    )
                }
            </Grid>
        </div>
    );
};