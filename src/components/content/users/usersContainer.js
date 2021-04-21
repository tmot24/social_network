import {connect} from "react-redux";
import {
    toggleFollowingProgress, getUsersThunkCreator, follow, unfollow
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector, getPageSizeSelector,
    getTotalUsersCountSelector, getUsersSelector,
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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    };
};

const mapDispatchToProps = {
    follow, unfollow, toggleFollowingProgress, getUsersThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);