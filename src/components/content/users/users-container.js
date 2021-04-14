import {connect} from "react-redux";
import {Users} from "./users";
import {followUnfollowAC, setUserAC} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUnfollow: (userId) => {
            dispatch(followUnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        }
    };
};

export const UsersContainer
    = connect(mapStateToProps, mapDispatchToProps)(Users);