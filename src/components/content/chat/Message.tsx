import React from "react"
import {ChatMessageAPIType} from "../../../api/chat-api"
import avatar from "../../../assets/images/avatar.svg"

export const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {

    return (
        <div>
            <img alt={"img"} src={message.photo || avatar} style={{width: "30px"}}/>
            <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})