const IS_FOLLOW = "IS_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
};

export const isFollowAC = (userId) => ({type: IS_FOLLOW, userId});
export const setUserAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
