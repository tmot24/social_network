import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/default_avatar.jpg";
import {Button, CardActions, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: 270,
        height: 370,
        margin: "8px",
    },
    media: {
        height: "200px",
    },
});

export const User = ({user, followingInProgress, follow, unfollow}) => {

    const classes = useStyles();

    return (
        <Grid item>
            <Card className={classes.root}>
                <CardActionArea component={NavLink} to={`/profile/${user.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={user.photos.small ? user.photos.small : avatar}
                        title={user.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name:<br/>${user.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Status: {user.status || "No status"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {user.followed
                        ? <Button variant={"contained"} fullWidth size="small" color="primary"
                                  disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => unfollow(user.id)}
                        >Unfollow</Button>
                        : <Button variant={"contained"} fullWidth size="small" color="primary"
                                  disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => follow(user.id)}
                        >Follow</Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};