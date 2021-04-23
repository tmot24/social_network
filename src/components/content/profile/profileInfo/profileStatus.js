import {Preloader} from "../../common/preloader/preloader";
import {useEffect, useState} from "react";

export const ProfileStatus = ({profile, status, updateUserStatus, isOwner}) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState();

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

    const onChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            {!editMode
                ? <div>
                    <div>
                        <b>Status: </b>
                        <span onDoubleClick={isOwner ? () => activateEditMode() : null}>{localStatus || "No status"}</span>
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
