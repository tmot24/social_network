import {Paginator} from "../common/paginator/paginator"
import {User} from "./user"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import React from "react"
import {UserType} from "../../../types/typs"
import {UsersSearchForm} from "./usersSearchForm"
import {FilterType} from "../../../redux/users-reducer"

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
    },
})

type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: UserType[],
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: number[],
    onFilterChanged: (filter: FilterType) => void
}

export const Users: React.FC<UsersType> = React.memo(({
                                               totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow,
                                               users, followingInProgress, onFilterChanged,
                                           }) => {
    const classes = useStyle()

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </Grid>
            <Grid item>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                           onPageChanged={onPageChanged}/>
            </Grid>
            <Grid item className={classes.cards}>
                {
                    users.map((user, index) => (
                            <User key={index} user={user} followingInProgress={followingInProgress}
                                  follow={follow} unfollow={unfollow}/>
                        ),
                    )
                }
            </Grid>
        </Grid>
    )
})