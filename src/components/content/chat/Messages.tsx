import {useSelector} from "react-redux"
import {AppStateType} from "../../../redux/redux-store"
import React, {useEffect, useRef} from "react"
import {Message} from "./Message"
import {Paper} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        height: 400,
        overflowY: "auto",
    }
}))

export const Messages = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()
    const classes = useStyles(theme)

    useEffect(() => {
        messagesAnchorRef.current?.scrollTo(0, 99999);
    }, [messages])

    return (
        <Paper className={classes.root} elevation={10} ref={messagesAnchorRef}>
            {messages.map((m, index) => <Message key={m.id} message={m}/>)}
        </Paper>
    )
}