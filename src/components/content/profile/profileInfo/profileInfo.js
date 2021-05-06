import style from "./profileInfo.module.css";
import {Preloader} from "../../common/preloader/preloader";
import {ProfileStatus} from "./profileStatus";
import avatar from "../../../../assets/images/avatar.svg";
import {useState} from "react";
import {ProfileDataForm} from "./profileDataForm";
import {Typography} from "@material-ui/core";


export const ProfileInfo = ({
                                profile,
                                status,
                                updateUserStatus,
                                isOwner,
                                savePhoto,
                                saveProfile,
                            }) => {
    const [editMode, setEditMode] = useState(false);

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={profile.photos.large || avatar} alt="img"/>
                {editMode
                    ? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode}
                    />
                    : <ProfileData profile={profile} goToEditMode={() => setEditMode(true)} isOwner={isOwner}/>
                }
                <ProfileStatus profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
            </div>
            {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <div>
                <Typography variant={"subtitle1"}>Full name:</Typography>
                <Typography variant={"subtitle2"}>{profile.fullName}</Typography>
            </div>
            <div>
                <Typography variant={"subtitle1"}>Looking for a job:</Typography>
                <Typography variant={"subtitle2"}>{profile.lookingForAJob ? "yes" : "no"}</Typography>
            </div>
            {profile.lookingForAJob &&
            <div>
                <Typography variant={"subtitle1"}>My professional skills:</Typography>
                <Typography variant={"subtitle2"}>{profile.lookingForAJobDescription}</Typography>
            </div>
            }
            <div>
                <Typography variant={"subtitle1"}>About me:</Typography>
                <Typography variant={"subtitle2"}>{profile.aboutMe}</Typography>
            </div>
            <div>
                <Typography variant={"subtitle1"}>Contacts:</Typography>
                {
                    Object.keys(profile.contacts)
                        .map(key =>
                            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        )
                }
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    // if (!contactValue) return null
    return (
        <div className={style.contact}>
            <Typography variant={"subtitle1"}>{contactTitle}: </Typography>{contactValue}
        </div>
    );
};