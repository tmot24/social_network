import style from "./navBar.module.css";
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemText} from "@material-ui/core";

export const NavBar = () => {
    return (
        <>
            <List component="nav"  aria-label="mailbox folders" style={{padding: 0, textDecoration: "none"}} className={style.nav}>
                <NavLink to={"/profile"} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText className={style.item} primary="Profile"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/dialogs"} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText className={style.item} primary="Dialogs"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/users"} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText className={style.item} primary="Users"/>
                    </ListItem>
                </NavLink>
                <NavLink to={"/login"} activeClassName={style.activeLink}>
                    <ListItem button divider>
                        <ListItemText className={style.item} primary="Login"/>
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};