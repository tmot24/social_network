import {ResultCodeForCaptcha, ResultCodesEnum} from "../api/api";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

type InitialStateType = typeof initialState

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    errorMessage: null as string | null,
    captchaUrl: undefined as string | undefined, // if null, then captcha is not required
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            };

        case "SET_ERROR_LOGIN":
            return {
                ...state,
                errorMessage: action.errorMessage,
            };

        default:
            return state;
    }
};

type ActionsType = InferActionsTypes<typeof actions>

const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SET_USER_DATA", payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: "GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}} as const),
    setErrorLogin: (errorMessage: string) => ({type: "SET_ERROR_LOGIN", errorMessage} as const),
}

type ThunkType = BaseThunkType<ActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkType => async (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(loginData => {
                if (loginData.resultCode === ResultCodesEnum.Success) {
                    // success, get auth data
                    dispatch(getAuthUserData());
                } else {
                    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                        dispatch(getCaptchaUrl());
                    }
                    dispatch(actions.setErrorLogin(loginData.messages[0]));
                }
            }
        )
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
};