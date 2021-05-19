import {useSelector} from "react-redux"
import {AppStateType} from "../../../redux/redux-store"
import React, {useEffect, useRef} from "react"
import {Message} from "./Message"

export const Messages = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesAnchorRef.current?.scrollTo(0, 99999);
    }, [messages])

    return (
        <div ref={messagesAnchorRef} style={{height: "400px", overflowY: "auto"}}>
            {messages.map((m, index) => <Message key={m.id} message={m}/>)}
        </div>
    )
}