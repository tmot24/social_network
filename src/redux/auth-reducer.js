import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR_LOGIN = "SET_ERROR_LOGIN";

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

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                console.log(response.data.messages[0]);
                dispatch(setErrorLogin(response.data.messages[0]));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};