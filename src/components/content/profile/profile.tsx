import {ProfileInfo} from "./profileInfo/profileInfo";
import {Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Preloader} from "../common/preloader/preloader";
import {ProfileType} from "../../../types/typs";
import React, {FC} from "react";
import FaceIcon from '@material-ui/icons/Face';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import StorageIcon from '@material-ui/icons/Storage';

const useStyles = makeStyles(theme => ({
    info: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    paper: {
        margin: theme.spacing(2),
    },
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        flexDirection: "row"
    },
}));

type ProfilePropsTypes = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const Profile: FC<ProfilePropsTypes> = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    if (!profile) return <Preloader/>;

    return (
        <Grid container>
            <Grid item sm={6} xs={12} >
                <Paper className={classes.info}>
                    <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
                                 savePhoto={savePhoto}
                                 saveProfile={saveProfile}
                    />
                </Paper>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Paper className={classes.root}>
                    <Typography variant={"h6"}>
                        После авторизации, вы можете изменить:
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FaceIcon/>
                                </ListItemIcon>
                                <ListItemText>Аватарку</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <TextFormatIcon/>
                                </ListItemIcon>
                                <ListItemText>Статус (дважды кликнув на него, либо на заголовок)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <StorageIcon/>
                                </ListItemIcon>
                                <ListItemText>Личные данные и контакты</ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};