import {Preloader} from "../../common/preloader/preloader";
import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileType} from "../../../../types/typs";
import {Box, Typography} from "@material-ui/core"

type ProfileStatusType = {
    profile: ProfileType,
    status: string,
    updateUserStatus: (status: string) => void
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
        updateUserStatus(localStatus as string);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    };

    if (!profile) return <Preloader/>;
    return (
        <>
            <Typography onDoubleClick={isOwner ? () => activateEditMode() : undefined} variant={"h6"}>Status: </Typography>
            {!editMode
                ? <div>
                    <div>
                        <Box fontStyle={"italic"} onDoubleClick={isOwner ? () => activateEditMode() : undefined}>{localStatus || "No status"}</Box>
                    </div>

                </div>
                : <div>
                    <input onChange={onChange}
                           autoFocus={true} onBlur={() => deactivateEditMode()}
                           type="text" defaultValue={localStatus}/>
                </div>
            }
        </>
    );
};
