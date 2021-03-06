import avatar from "../assets/images/avatar.svg"
import {InferActionsTypes} from "./redux-store";

export type DialogsInitialStateType = typeof initialState

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
    ],
};

export const dialogsReducer = (state = initialState, action: DialogsActionsTypes): DialogsInitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }

        default:
            return state;
    }
};

export type DialogsActionsTypes = InferActionsTypes<typeof dialogsActions>

export const dialogsActions = {
    sendMessage: (newMessageBody: string) => ({type: "SEND_MESSAGE", newMessageBody} as const)
}