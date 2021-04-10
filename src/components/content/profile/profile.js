import style from "./profile.module.css";
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/profileInfo";

export const Profile = ({profilePage}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dataPosts={profilePage.dataPosts}/>
        </div>
    );
};