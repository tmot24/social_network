import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {DrawerComponent} from "./drawerComponent";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CloseIcon from '@material-ui/icons/Close';
import {Login} from "../login/login";
import LoginContainer from "../login/loginContainer";

export const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    toolbar: {
        justifyContent: "space-between",
    },
    title: {
        marginLeft: 20,
    },
    login: {
        display: "flex",
        alignItems: "center",
    },
    empty: {
        flexGrow: 1,
    },
    name: {
        marginRight: 12,
    }
}));

export const Header = ({isAuth, login, logout, darkMode, setDarkMode}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    {open
                        ? <IconButton onClick={handleDrawerClose} color={"inherit"} edge="start">
                            <CloseIcon/>
                        </IconButton>
                        : <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
                            <MenuIcon/>
                        </IconButton>
                    }
                    <Typography variant="h6" noWrap className={classes.title}>
                        Social network
                    </Typography>
                    <div className={classes.empty}/>
                    <div className={classes.login}>
                        <IconButton color={"secondary"} onClick={() => setDarkMode(!darkMode)}>
                            <Brightness4Icon/>
                        </IconButton>
                        <div>
                            {isAuth
                                ? <div className={classes.login}>
                                    <Typography className={classes.name} variant={"h6"}>{login}</Typography>
                                    <Button color={"secondary"} variant="outlined" onClick={logout}>Log out</Button>
                                </div>
                                : <LoginContainer/>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}/>
        </div>
    );
};
