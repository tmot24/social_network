import {Profile} from "./profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getUserProfile} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = ({profile, getUserProfile}) => {

    const param = useParams().userId || 2;

    useEffect(() => {
        getUserProfile(param);
    }, [getUserProfile, param]);

    return (
        <Profile profile={profile}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

const mapDispatchToProps = {
    getUserProfile
};

export default compose(connect(mapStateToProps, mapDispatchToProps),/*withAuthRedirect*/)(ProfileContainer)