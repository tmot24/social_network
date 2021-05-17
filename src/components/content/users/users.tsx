import {Paginator} from "../common/paginator/paginator"
import {User} from "./user"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import React, {useEffect} from "react"
import {UsersSearchForm} from "./usersSearchForm"
import {FilterType, getUsersThunkCreator, followThunk, unfollowThunk} from "../../../redux/users-reducer"
import {useDispatch, useSelector} from "react-redux"
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersFilter,
} from "../../../redux/selectors/usersSelectors"

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

export const Users = React.memo(() => {

    const users = useSelector(getUsers)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }, [currentPage, dispatch, filter, pageSize])

    const onPageChanged = (currentPage: number) => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
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