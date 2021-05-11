import {Preloader} from "../../common/preloader/preloader";
import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileType} from "../../../../types/typs";

type ProfileStatusType = {
    profile: ProfileType,
    status: string,
    updateUserStatus: (status: string | undefined) => void,
    isOwner: boolean,
}

export const ProfileStatus: React.FC<ProfileStatusType> = ({profile, status, updateUserStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState<string>();

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateUserStatus(localStatus);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            {!editMode
                ? <div>
                    <div>
                        <b>Status: </b>
                        <span onDoubleClick={isOwner ? () => activateEditMode() : undefined}>{localStatus || "No status"}</span>
                    </div>

                </div>
                : <div>
                    <input onChange={onChange}
                           autoFocus={true} onBlur={() => deactivateEditMode()}
                           type="text" defaultValue={localStatus}/>
                </div>
            }
        </div>
    );
};
