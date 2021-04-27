import style from "./navBar.module.css";
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemText} from "@material-ui/core";

export const NavBar = () => {
    return (
        <>
            <List component="nav" className={style.nav} disablePadding>
                <NavLink to={"/profile"} className={style.link}>
                    <ListItem button divider >
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </NavLink>
                <ListItem button divider component={NavLink} to={"/dialogs"} className={style.link}>
                	<ListItemText primary="Dialogs"/>
                </ListItem>
                <NavLink to={"/users"} className={style.link}>
                    <ListItem button divider>
                        <ListItemText primary="Users"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/login"} className={style.link}>
                    <ListItem button divider>
                        <ListItemText primary="Login"/>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};