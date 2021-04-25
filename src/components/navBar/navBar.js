import style from "./navBar.module.css";
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemText} from "@material-ui/core";

export const NavBar = () => {
    return (
        <>
            <List component="nav" className={style.nav} disablePadding>
                <NavLink to={"/profile"} className={style.link} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/dialogs"} className={style.link} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText primary="Dialogs"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/users"} className={style.link} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText primary="Users" style={{textDecoration: "none"}}/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/login"} className={style.link} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText primary="Login"/>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};