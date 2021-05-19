import React, {useEffect, useRef, useState} from "react"
import {ChatMessageAPIType} from "../../api/chat-api"
import {useDispatch, useSelector} from "react-redux"
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer"
import {AppStateType} from "../../redux/redux-store"


const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()


    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return <div>
        {status === "error" && <div>Some error occurred. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>
}

const Messages = () => {
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


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {

    return <div>
        <img alt={"img"} src={message.photo} style={{width: "30px"}}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})


const AddMessageForm = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage("")
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
        </div>
        <div>
            <button disabled={status !== "ready"} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}

export default ChatPage