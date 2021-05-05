import {connect} from "react-redux";
import {
    toggleFollowingProgress, getUsersThunkCreator, follow, unfollow
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import {Users} from "./users";
import {getUsersSelector} from "./usersSelectors";
import {LinearProgress} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

const UsersContainer = ({
                            follow, unfollow, users, pageSize, totalUsersCount, currentPage,
                            isFetching, toggleFollowingProgress,
                            followingInProgress, getUsersThunkCreator,
                        }) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize);
    }, [currentPage, getUsersThunkCreator, pageSize]);

    const theme = useTheme();

    const onPageChanged = (pageNumber) => {
        getUsersThunkCreator(pageNumber, pageSize);
    };

    return (
        <>
            {isFetching ?
                <LinearProgress style={{
                    backgroundColor: "#303030",
                    marginBottom: theme.spacing(2),
                }}/> : null
            }
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                follow={follow}
                unfollow={unfollow}
                users={users}
                toggleFollowingProgress={toggleFollowingProgress}
                followingInProgress={followingInProgress}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

const mapDispatchToProps = {
    follow, unfollow, toggleFollowingProgress, getUsersThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);