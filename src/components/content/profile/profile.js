import {ProfileInfo} from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/my-posts-container";

export const Profile = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
};