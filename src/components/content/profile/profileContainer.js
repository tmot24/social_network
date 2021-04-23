import {Profile} from "./profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const ProfileContainer = ({
                              profile, status, authorizedUserId,
                              getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile,
                          }) => {

    let userId = useParams().userId || authorizedUserId;

    useEffect(() => {
        getUserProfile(userId);
        getUserStatus(userId);
    }, [getUserStatus, getUserProfile, userId]);

    return (
        <Profile profile={profile} status={status} updateUserStatus={updateUserStatus}
                 isOwner={userId === authorizedUserId} savePhoto={savePhoto}
                 saveProfile={saveProfile}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
    };
};

const mapDispatchToProps = {
    getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileContainer);