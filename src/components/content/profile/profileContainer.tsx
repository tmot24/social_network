import {Profile} from "./profile";
import {connect} from "react-redux";
import {FC, useEffect} from "react";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../../../types/typs";

type ProfileContainerTypes = MapStateToPropsTypes & MapDispatchToPropsTypes

const ProfileContainer: FC<ProfileContainerTypes> = ({
                              profile, status, authorizedUserId,
                              getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile,
                          }) => {

    let userId = useParams<PathParamsType>().userId || authorizedUserId || 16528;

    useEffect(() => {
        getUserProfile(+userId);
        getUserStatus(+userId);
    }, [getUserStatus, getUserProfile, userId]);

    return (
        <Profile profile={profile} status={status} updateUserStatus={updateUserStatus}
                 isOwner={userId === authorizedUserId} savePhoto={savePhoto}
                 saveProfile={saveProfile}
        />
    );
};

type MapStateToPropsTypes = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsTypes = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
    };
};

const mapDispatchToProps = {
    getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);