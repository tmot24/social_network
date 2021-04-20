import {Profile} from "./profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = ({
                              profile, status, authorizedUserId, isAuth,
                              getUserProfile, getUserStatus, updateUserStatus,
                          }) => {

    const param = useParams().userId || authorizedUserId;

    useEffect(() => {
        getUserProfile(param);
        getUserStatus(param);
    }, [getUserStatus, getUserProfile, param]);

    return (
        <Profile profile={profile} status={status} updateUserStatus={updateUserStatus}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = {
    getUserProfile, getUserStatus, updateUserStatus,
};

export default compose(connect(mapStateToProps, mapDispatchToProps),/*withAuthRedirect*/)(ProfileContainer);