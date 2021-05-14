import {ProfileInfo} from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Preloader} from "../common/preloader/preloader";
import {ProfileType} from "../../../types/typs";
import {FC} from "react";

const useStyles = makeStyles(theme => ({
    info: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    paper: {
        margin: theme.spacing(2),
    }
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
            <Grid item>
                <Paper className={classes.info}>
                    <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
                                 savePhoto={savePhoto}
                                 saveProfile={saveProfile}
                    />
                </Paper>
            </Grid>
            <Grid item className={classes.paper}>
                <MyPostsContainer/>
            </Grid>
        </Grid>
    );
};