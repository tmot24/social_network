import {createSelector} from "reselect";
import {AppStateType} from "../../../redux/redux-store";

const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getUsersSelector =
    createSelector(getUsers, (users) => {
        return users;
    });