import {connect} from "react-redux";
import {Users} from "./users";
import {followUnfollowAC, setCurrentPageAC, setUserAC, setUsersTotalCountAC} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUnfollow: (userId) => {
            dispatch(followUnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setUsersTotalCountAC(totalUsersCount));
        }
    };
};

export const UsersContainer
    = connect(mapStateToProps, mapDispatchToProps)(Users);