import {Preloader} from "../../common/preloader/preloader";
import {useEffect, useState} from "react";

export const ProfileStatus = ({profile, status, updateStatus}) => {
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
        updateStatus(localStatus);
    };

    const onChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={() => activateEditMode()}>{localStatus || "No status"}</span>
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