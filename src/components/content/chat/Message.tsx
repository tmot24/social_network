import React from "react"
import {ChatMessageAPIType} from "../../../api/chat-api"
import avatar from "../../../assets/images/avatar.svg"
import {Avatar, Divider, Grid, Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    text: {
        margin: theme.spacing(1),
        flexGrow: 1
    },
    body: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

export const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Avatar alt={"img"} src={message.photo || avatar}/>
            </Grid>
            <Grid item className={classes.text}>
                <Typography variant={"subtitle1"}>{message.userName}</Typography>
                <Typography className={classes.body} variant={"body1"}>{message.message}</Typography>
                <Divider variant={"fullWidth"}/>
            </Grid>
        </Grid>
    )
})