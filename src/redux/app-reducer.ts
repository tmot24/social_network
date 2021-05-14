import {getAuthUserData} from "./auth-reducer";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

export type AppInitialStateType = typeof initialState

const initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
    initializedSuccess: () => ({type: "INITIALIZED_SUCCESS"} as const),
}

type ThunkType = BaseThunkType<ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(actions.initializedSuccess());
    })
};