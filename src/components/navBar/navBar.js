import style from "./navBar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={"/profile"} activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/dialogs"} activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/users"} activeClassName={style.activeLink}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/login"} activeClassName={style.activeLink}>Login</NavLink>
            </div>
        </nav>
    );
};