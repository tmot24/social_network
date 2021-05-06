import {Post} from "./posts/post";
import {AddMessageFormik} from "../../addMessageForm/addMessageForm";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(1)
    },
}));

export const MyPosts = ({posts, addPost}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div>
            <Card >
                <CardContent>
                    <Typography className={classes.title} variant={"h5"}>My Posts</Typography>
                    <AddMessageFormik sendMessage={addPost}/>
                </CardContent>
            </Card>
            <div>
                {
                    posts.map(elem => <Post key={elem.id} message={elem.message} likesCount={elem.likesCount}/>)
                }
            </div>
        </div>
    );
};