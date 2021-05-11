import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_ERROR_LOGIN = "auth/SET_ERROR_LOGIN";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    errorMessage: null as string | null,
    captchaUrl: null as string | null, // if null, then captcha is not required
};

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        userId, email, login, isAuth
    }
});

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const setErrorLogin = (errorMessage: string) => ({type: SET_ERROR_LOGIN, errorMessage});

export const getAuthUserData = () => async (dispatch: any) => {
    const meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        // success, get auth data
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        dispatch(setErrorLogin(loginData.messages[0]));
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};