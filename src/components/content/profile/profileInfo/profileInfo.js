import style from "./profileInfo.module.css";
import {Preloader} from "../../common/preloader/preloader";
import {ProfileStatus} from "./profileStatus";
import avatar from "../../../../assets/images/default_avatar.jpg";


export const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            <div>
                <img className={style.bgImg}
                     src="https://image.jimcdn.com/app/cms/image/transf/none/path/s32f0c11b497c174c/backgroundarea/i10997fa6378f4ba6/version/1571363056/image.jpg"
                     alt="img"/>
            </div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={profile.photos.large || avatar} alt="img"/>
                <ProfileStatus profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
            </div>
            {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
        </div>
    );
};