import axios from "axios";
import {UserType} from "../types/typs";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f4f2d23a-f41e-43a8-8b64-ece065a162b7"
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