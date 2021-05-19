import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {startMessagesListening, stopMessagesListening} from "../../../redux/chat-reducer"
import {AppStateType} from "../../../redux/redux-store"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"
import {Messages} from "./Messages"
import {AddMessageForm} from "./AddMessageForm"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import {Grid, Paper, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        flexDirection: "row"
    },
}))

const Chat = () => {
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Grid container>
            <Grid item sm={5} xs={12}>
                {status === "error" && <div>Some error occurred. Please refresh the page</div>}
                <Paper className={classes.root}>
                    <Messages/>
                    <AddMessageForm/>
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

        </Grid>
    )
}

export default withAuthRedirect(Chat)