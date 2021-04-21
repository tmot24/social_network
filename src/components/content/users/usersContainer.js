import {connect} from "react-redux";
import {
    toggleFollowingProgress, getUsersThunkCreator, follow, unfollow
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./usersSelectors";

const UsersContainer = ({
                            follow, unfollow, users, pageSize, totalUsersCount, currentPage,
                            isFetching, toggleFollowingProgress,
                            followingInProgress, getUsersThunkCreator,
                        }) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize);
    }, [currentPage, getUsersThunkCreator, pageSize]);

    const onPageChanged = (pageNumber) => {
        getUsersThunkCreator(pageNumber, pageSize);
    };

    return (
        <>
            {isFetching ? <Preloader/> : null}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

const mapDispatchToProps = {
    follow, unfollow, toggleFollowingProgress, getUsersThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)