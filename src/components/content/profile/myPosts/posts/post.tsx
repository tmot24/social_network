import avatar from "../../../../../assets/images/avatar.svg"
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";
import {FC} from "react";

const useStyles = makeStyles(theme => ({
    info: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),

    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
    img: {
        height: "100px",
        borderRadius: "50%",
        marginBottom: theme.spacing(1),
    }
}));

type PostType = {
    message: string
    likesCount: number
}

export const Post: FC<PostType> = ({message, likesCount}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Card className={classes.info}>
            <CardContent className={classes.content}>
                <img className={classes.img} src={avatar} alt="avatar"/>
                <div>
                    <Typography variant={"body1"} align={"center"}>
                        {message}
                    </Typography>
                    <Typography variant={"body2"} align={"left"}>
                        like: {likesCount}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};