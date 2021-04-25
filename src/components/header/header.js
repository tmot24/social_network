import style from "./header.module.css";
import cloud from "../../assets/images/Cloud,_blue_background.svg"
import {NavLink} from "react-router-dom";

export const Header = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <img src={cloud} alt="cloud"/>
            <div>
                {isAuth
                    ? <div className={style.login}>
                        <h3>{login}</h3>
                        <button type="button" className="btn btn-light" onClick={logout}>Log out</button>
                    </div>
                    : <button type="button" className="btn btn-light" onClick={logout}>
                        <NavLink className={style.navLink} to={"/login"}>Login</NavLink>
                    </button>
                }
            </div>
        </header>
    );
};