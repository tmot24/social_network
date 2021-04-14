import style from "./dialogsItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = ({name, id, img}) => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <img className={style.avatar} src={img} alt="avatar"/>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};