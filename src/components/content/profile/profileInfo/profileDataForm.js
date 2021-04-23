import {useForm} from "react-hook-form";
import style from "./profileInfo.module.css";
import {useState} from "react";

export const ProfileDataForm = ({profile, saveProfile, setEditMode}) => {
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
    const onSubmit = (data) => {
        saveProfile(data)
            .then(() => setEditMode(false))
            .catch(reject => setErrors(reject))

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <button>save</button>
                </div>
                {errors.map(elem =>
                    <div className={style.error} key={elem}>
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
                            <textarea type="text"
                                      placeholder={"My professional skills"}{...register("lookingForAJobDescription")}/>
                        </div>
                    </div>
                    <div>
                        <b>About me: </b>
                        <div>
                            <textarea type="text" placeholder={"About me"}{...register("aboutMe")}/>
                        </div>
                    </div>
                    <div>
                        <b>Contacts: </b>
                        <div>
                            {
                                Object.keys(profile.contacts)
                                    .map(key =>
                                        <div key={key} className={style.contact}>
                                            <b>{key}: </b>
                                            <input type="text" placeholder={key}{...register(`contacts.${key}`)}/>
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