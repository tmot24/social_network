import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/typs";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

const initialState = {
    users: [] as UserType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[], // array of users ids
}

type InitialState = typeof initialState

export const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };

        case "SET_USERS":
            return {...state, users: action.users};

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage};

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount};

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching};

        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: "FOLLOW", userId} as const),
    unfollowSuccess: (userId: number) => ({type: "UNFOLLOW", userId} as const),
    setUsers: (users: UserType[]) => ({type: "SET_USERS", users} as const),
    setCurrentPage: (currentPage: number) => ({
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const),
}

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>

export const getUsersThunkCreator = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));

        const response = await usersAPI.getUsers(page, pageSize);

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(response.items));
        dispatch(actions.setTotalUsersCount(response.totalCount));
    };
};

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow, actions.followSuccess);
    };
};

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow, actions.unfollowSuccess);
    };
};