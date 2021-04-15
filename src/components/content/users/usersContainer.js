import {connect} from "react-redux";
import {
    isFollowAC,
    setCurrentPageAC,
    setUserAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import axios from "axios";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";

const UsersContainerComponent = ({
                                     users,
                                     isFollow,
                                     setUsers,
                                     pageSize,
                                     totalUsersCount,
                                     currentPage,
                                     setCurrentPage,
                                     setTotalUsersCount,
                                     isFetching,
                                     toggleIsFetching,
                                 }) => {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                setTotalUsersCount(response.data.totalCount);
            });
    }, [setTotalUsersCount]);

    useEffect(() => {
        toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
            });
    }, [currentPage, pageSize, setUsers, toggleIsFetching]);

    const onPageChanged = (pageNumber) => {
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
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
                isFollow={isFollow}
                users={users}
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        isFollow: (userId) => {
            dispatch(isFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setUsersTotalCountAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    };
};

export const UsersContainer
    = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);