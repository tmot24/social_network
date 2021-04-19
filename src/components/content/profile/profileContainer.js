import {Profile} from "./profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = ({
                              profile, status,
                              getUserProfile, getStatus, updateStatus,
                          }) => {

    const param = useParams().userId || 16528;

    useEffect(() => {
        getUserProfile(param);
        getStatus(param);
    }, [getStatus, getUserProfile, param]);

    return (
        <Profile profile={profile} status={status} updateStatus={updateStatus}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

const mapDispatchToProps = {
    getUserProfile, getStatus, updateStatus,
};

export default compose(connect(mapStateToProps, mapDispatchToProps),/*withAuthRedirect*/)(ProfileContainer);