import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {drawerWidth} from "./header";
import {useHistory} from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

export const DrawerComponent = ({handleDrawerClose, open}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const history = useHistory();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button onClick={() => history.push("/profile")}>
                    <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                    <ListItemText primary={"Profile"}/>
                </ListItem>
                <ListItem button onClick={() => history.push("/dialogs")}>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary={"Dialogs"}/>
                </ListItem>
                <ListItem button onClick={() => history.push("/users")}>
                    <ListItemIcon><GroupIcon/></ListItemIcon>
                    <ListItemText primary={"Users"}/>
                </ListItem>
            </List>
        </Drawer>
    );
};