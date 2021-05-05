import {Paginator} from "../common/paginator/paginator";
import {User} from "./user";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    root: {
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
    },
    cards: {
        margin: 20,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    }
});

export const Users = ({
                          totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow,
                          users, followingInProgress
                      }) => {
    const classes = useStyle();

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                           onPageChanged={onPageChanged}/>
            </Grid>
            <Grid item className={classes.cards}>
                {
                    users.map(user => (
                            <User key={user.id} user={user} followingInProgress={followingInProgress}
                                  follow={follow} unfollow={unfollow}/>
                        )
                    )
                }
            </Grid>
        </Grid>
    );
};