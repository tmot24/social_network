import style from "./dialogsItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = ({name, id}) => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};