import {Preloader} from "../../common/preloader/preloader";
import {useState} from "react";

export const ProfileStatus = ({profile}) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    if (!profile) return <Preloader/>;
    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} onBlur={() => toggleEditMode()} type="text" defaultValue={"Status"}/>
                </div>
                : <div>
                    <span onDoubleClick={() => toggleEditMode()}>Status</span>
                </div>
            }
        </div>
    );
};