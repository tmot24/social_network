import {PhotosType, PostType, ProfileType} from "../types/typs";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "It's my first post", likesCount: 22},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: "",
};

export type ProfileInitialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            };

        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            };

        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };

        case "SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            };

        default:
            return state;
    }
};

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({type: "ADD_POST", newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SET_STATUS", status} as const),
    deletePost: (postId: number) => ({type: "DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SAVE_PHOTO_SUCCESS", photos} as const),
}

type ThunkType = BaseThunkType<ActionsType>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !== null) {
            await dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        return Promise.reject(data.messages);
    }
};