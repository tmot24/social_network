import {ProfileInfo} from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/my-posts-container";

export const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
};