import {NavLink} from "react-router-dom";
import avatar from "../../../assets/images/avatar.svg";
import {Button, CardActions, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {FC} from "react";
import {UserType} from "../../../types/typs";

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

type UserPropsType = {
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    followingInProgress: number[],
    user: UserType
}

export const User: FC<UserPropsType> = ({user, followingInProgress, follow, unfollow}) => {

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
                        <Typography noWrap gutterBottom variant="h6" component="h2">
                            Name:<br/>{user.name}
                        </Typography>
                        <Typography noWrap variant="body2" color="textSecondary" component="p">
                            Status: {user.status || "No status"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {user.followed
                        ? <Button variant={"contained"} fullWidth size="small"
                                  disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => unfollow(user.id)}
                        >Unfollow</Button>
                        : <Button variant={"contained"} fullWidth size="small"
                                  disabled={followingInProgress.some(userId => userId === user.id)}
                                  onClick={() => follow(user.id)}
                        >Follow</Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};