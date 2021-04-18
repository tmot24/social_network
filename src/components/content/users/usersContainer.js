import {connect} from "react-redux";
import {
    toggleFollowingProgress, getUsersThunkCreator, follow, unfollow
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";
import {compose} from "redux";

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
        users: state.usersPage.users,
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersContainer)