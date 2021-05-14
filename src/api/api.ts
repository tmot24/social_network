import axios from "axios";
import {UserType} from "../types/typs";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b45f20e6-c418-486d-bf45-21bf8191b135"
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: UserType[]
    totalCount: number
    error?: string
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: string[]
    resultCode: RC
}