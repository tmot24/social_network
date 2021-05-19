import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer"
import {usersReducer} from "./users-reducer"
import {authReducer} from "./auth-reducer"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {appReducer} from "./app-reducer"
import {chatReducer} from "./chat-reducer"

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store =
    createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
