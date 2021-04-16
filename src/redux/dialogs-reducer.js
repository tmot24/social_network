import avatar from "../assets/images/default_avatar.jpg"

const UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
    dataDialog: [
        {id: 1, name: "Dimych", img: avatar},
        {id: 2, name: "Andrey", img: avatar},
        {id: 3, name: "Sveta", img: avatar},
        {id: 4, name: "Sasha", img: avatar},
        {id: 5, name: "Victor", img: avatar},
        {id: 6, name: "Valera", img: avatar},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ],
    newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }

        case SEND_MESSAGE:
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_POST_BODY, body: body});