import {useState} from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {AssistantContent} from "./assistantContent";
import {DrawerComponent} from "./drawerComponent";
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
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
                                : <Button color={"secondary"} variant="outlined" onClick={logout}>
                                    Login
                                </Button>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose}/>
            <AssistantContent/>
        </div>
    );
};
