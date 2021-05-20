import {Paginator} from "../common/paginator/paginator"
import {User} from "./user"
import {Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import React, {useEffect} from "react"
import {UsersSearchForm} from "./usersSearchForm"
import {FilterType, getUsersThunkCreator, followThunk, unfollowThunk} from "../../../redux/users-reducer"
import {useDispatch, useSelector} from "react-redux"
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersFilter,
} from "../../../redux/selectors/usersSelectors"
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyle = makeStyles(theme => ({
    left: {
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
    typography: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        flexDirection: "row"
    },
    center: {
        display: "flex",
        justifyContent: "center",
    }
}))

export const Users = React.memo(() => {

    const users = useSelector(getUsers)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)
    const theme = useTheme()

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
    const classes = useStyle(theme)

    return (
        <Grid container>
            <Grid item className={classes.left} lg={10} sm={12}>
                <Grid item className={classes.center}>
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                </Grid>
                <Grid item className={classes.center}>
                    <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                               onPageChanged={onPageChanged}/>
                </Grid>
                <Grid item className={classes.cards} sm={12}>
                    {
                        users.map((user, index) => (
                                <User key={index} user={user} followingInProgress={followingInProgress}
                                      follow={follow} unfollow={unfollow}/>
                            ),
                        )
                    }
                </Grid>
            </Grid>
            <Grid item lg={2} sm={12}>
                <Paper className={classes.typography}>
                    <Typography variant={"h6"}>
                        Есть возможность поиска людей
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <EmojiPeopleIcon/>
                                </ListItemIcon>
                                <ListItemText>По имени</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SyncAltIcon/>
                                </ListItemIcon>
                                <ListItemText>По значению follow / unfollow</ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
})