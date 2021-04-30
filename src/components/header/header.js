import style from "./header.module.css";
import cloud from "../../assets/images/Cloud,_blue_background.svg"
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Switch} from "@material-ui/core";

export const Header = ({isAuth, login, logout, darkMode, setDarkMode}) => {
    return (
        <header className={style.header}>
            <img src={cloud} alt="cloud"/>
            <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                name="theme"
                color={"default"}
            />
            <div>
                {isAuth
                    ? <div className={style.login}>
                        <div>
                            <h3>{login}</h3>
                        </div>
                        <Button variant="contained" onClick={logout}>Log out</Button>
                    </div>
                    : <Button variant="contained" onClick={logout}>
                        <NavLink className={style.navLink} to={"/login"}>Login</NavLink>
                    </Button>
                }
            </div>
        </header>
    );
};