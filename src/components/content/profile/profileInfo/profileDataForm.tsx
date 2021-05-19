import {useForm} from "react-hook-form";
import React, {FC, useState} from "react";
import {ProfileType} from "../../../../types/typs";

type ProfileDataFormPropsType = {
    profile: ProfileType
    saveProfile: (profile: ProfileType) => Promise<any>
    handleToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile, saveProfile, handleToggle}) => {
    const [errors, setErrors] = useState([]);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            }
        }
    });
    const onSubmit = (data: ProfileType) => {
        saveProfile(data)
            .then(() => handleToggle)
            .catch(reject => setErrors(reject))

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <button>save</button>
                </div>
                {errors.map(elem =>
                    <div key={elem}>
                        {elem}
                    </div>)
                }
                <div>
                    <div>
                        <b>Full name: </b>
                        <div>
                            <input type="text" placeholder={"Full name"}{...register("fullName")}/>
                        </div>
                    </div>
                    <div>
                        <b>Looking for a job: </b>
                        <div>
                            <input type="checkbox" {...register("lookingForAJob")}/>
                        </div>
                    </div>
                    <div>
                        <b>My professional skills: </b>
                        <div>
                            <textarea
                                placeholder={"My professional skills"}{...register("lookingForAJobDescription")}/>
                        </div>
                    </div>
                    <div>
                        <b>About me: </b>
                        <div>
                            <textarea placeholder={"About me"}{...register("aboutMe")}/>
                        </div>
                    </div>
                    <div>
                        <b>Contacts: </b>
                        <div>
                            {
                                Object.keys(profile.contacts)
                                    .map(key =>
                                        <div key={key}>
                                            <b>{key}: </b>
                                            <input type="text"
                                                   placeholder={key}{...register(`contacts.${key}` as any)}/>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};