import {ProfileInfo} from "./profileInfo/profileInfo";
import MyPostsContainer from "./myPosts/my-posts-container";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Preloader} from "../common/preloader/preloader";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2)
    }
}));

export const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    if (!profile) return <Preloader/>

    return (
        <Grid container>
            <Grid item>
                <Paper className={classes.paper}>
                    <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
                                 savePhoto={savePhoto}
                                 saveProfile={saveProfile}
                    />
                </Paper>
            </Grid>
            <Grid item>
                <MyPostsContainer/>
            </Grid>
        </Grid>
    );
};