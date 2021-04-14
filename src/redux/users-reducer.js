const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
};

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SET_USERS, users});

