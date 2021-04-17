import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching, follow, unfollow, toggleFollowingProgress
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";
import {usersAPI} from "../../../api/api";

const UsersContainer = ({
                            follow,
                            unfollow,
                            users,
                            setUsers,
                            pageSize,
                            totalUsersCount,
                            currentPage,
                            setCurrentPage,
                            setTotalUsersCount,
                            isFetching,
                            toggleIsFetching,
                            toggleFollowingProgress,
                            followingInProgress,
                        }) => {

    useEffect(() => {
        toggleIsFetching(true);
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.items);
                setTotalUsersCount(response.totalCount);
            });
    }, [currentPage, pageSize, setTotalUsersCount, setUsers, toggleIsFetching]);

    const onPageChanged = (pageNumber) => {
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, pageSize)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.items);
            });
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);