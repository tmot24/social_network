import {ProfileInfo} from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/my-posts-container";

export const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}
                         saveProfile={saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};