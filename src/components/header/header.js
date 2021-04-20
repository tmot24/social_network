import style from "./header.module.css";
import {NavLink} from "react-router-dom";

export const Header = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <img src="https://seeklogo.com/images/C/company-name-logo-C74A7D6F5A-seeklogo.com.png" alt="img"/>
            <div className={style.loginBlock}>
                {isAuth
                    ? <div>
                        {login} -
                        <button onClick={logout}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
};