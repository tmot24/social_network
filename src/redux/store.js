import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const randomImage = "https://source.unsplash.com/random"

export const store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Hi, how are you?", likesCount: 12},
                {id: 2, text: "It's my first post", likesCount: 21},
            ],
            newPostText: {

            }
        },
        dialogsPage: {
            dataDialog: [
                {id: 1, name: "Dimych", img: randomImage},
                {id: 2, name: "Andrey", img: randomImage},
                {id: 3, name: "Sveta", img: randomImage},
                {id: 4, name: "Sasha", img: randomImage},
                {id: 5, name: "Victor", img: randomImage},
                {id: 6, name: "Valera", img: randomImage},
            ],
            dataMessage: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"},
            ],
        },
        sideBar: {
            friends: [
                {id: 1, name: "Dimych", img: randomImage},
                {id: 2, name: "Andrey", img: randomImage},
                {id: 3, name: "Sveta", img: randomImage},
            ]
        },
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
    }
}


export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        text: postMessage,
        likesCount: 0,
    }
    state.profilePage.push(newPost)
}