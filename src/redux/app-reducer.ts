import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

const actions = {
    initializedSuccess: () => ({type: "INITIALIZED_SUCCESS"} as const),
}

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(actions.initializedSuccess());
    })
};