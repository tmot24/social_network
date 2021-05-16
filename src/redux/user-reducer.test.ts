import {UserType} from "../types/typs"
import {actions, UsersInitialState, usersReducer} from "./users-reducer"

let state: UsersInitialState;

beforeEach(() => {
    state = {
        users: [
            {id: 0, name: "Adam 0", followed: false, status: "status 0", photos: {small: null, large: null}},
            {id: 1, name: "Adam 1", followed: false, status: "status 1", photos: {small: null, large: null}},
            {id: 2, name: "Adam 2", followed: true, status: "status 2", photos: {small: null, large: null}},
            {id: 3, name: "Adam 3", followed: true, status: "status 3", photos: {small: null, large: null}},
        ] as UserType[],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as number[], // array of users ids,
        filter: {
            term: "",
            friend: null as boolean | null
        },
    }
})

test("follow success", () => {

    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test("unfollow success", () => {

    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})