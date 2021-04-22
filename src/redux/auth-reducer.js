import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_ERROR_LOGIN = "auth/SET_ERROR_LOGIN";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case SET_ERROR_LOGIN:
            return {
                ...state,
                errorMessage: action.errorMessage,
            };

        default:
            return state;
    }
};

export const setErrorLogin = (errorMessage) => ({type: SET_ERROR_LOGIN, errorMessage});
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        dispatch(setErrorLogin(response.data.messages[0]));
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};