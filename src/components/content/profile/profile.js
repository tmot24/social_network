import style from "./profile.module.css";
import {MyPosts} from "./myPosts/myPosts";
import {ProfileInfo} from "./profileInfo/profileInfo";

export const Profile = ({dataPosts}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts dataPosts={dataPosts}/>
        </div>
    );
};