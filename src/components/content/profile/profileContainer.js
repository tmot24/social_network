import {Profile} from "./profile";
import {connect} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setUserProfile} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";

const ProfileContainer = ({profile, setUserProfile}) => {

    const param = useParams().userId || 2;

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${param}`)
            .then(response => {
                setUserProfile(response.data);
            });
    }, [param, setUserProfile]);

    return (
        <Profile profile={profile}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

const mapDispatchToProps = {
    setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);