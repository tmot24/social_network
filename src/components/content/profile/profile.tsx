import {ProfileInfo} from "./profileInfo/profileInfo";
import {Grid, Paper, Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Preloader} from "../common/preloader/preloader";
import {ProfileType} from "../../../types/typs";
import React, {FC} from "react";

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
            <Grid item sm={5} xs={12} >
                <Paper className={classes.info}>
                    <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
                                 savePhoto={savePhoto}
                                 saveProfile={saveProfile}
                    />
                </Paper>
            </Grid>
            <Grid item sm={7} xs={12}>
                <Paper className={classes.root}>
                    <Typography variant={"h6"}>
                        Чат реализован с помощью WebSocket. Вы можете продублировать вкладку сайта и пообщаться с самим
                        собой &#128512;
                    </Typography>
                </Paper>
            </Grid>
{/*            <Grid item className={classes.paper}>
                <MyPostsContainer/>
            </Grid>*/}
        </Grid>
    );
};