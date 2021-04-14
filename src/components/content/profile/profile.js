import {ProfileInfo} from "./profileInfo/profileInfo";
import {MyPostsContainer} from "./myPosts/my-posts-container";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};