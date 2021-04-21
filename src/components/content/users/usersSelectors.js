import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
};

const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};


export const getUsersSelector =
    createSelector(getUsers, (users) => {
        return users;
    });

export const getPageSizeSelector =
    createSelector(getPageSize, (pageSize) => {
        return pageSize;
    });

export const getTotalUsersCountSelector =
    createSelector(getTotalUsersCount, (totalUsersCount) => {
        return totalUsersCount;
    });

export const getCurrentPageSelector =
    createSelector(getCurrentPage, (currentPage) => {
        return currentPage;
    });

export const getIsFetchingSelector =
    createSelector(getIsFetching, (isFetching) => {
        return isFetching;
    });

export const getFollowingInProgressSelector =
    createSelector(getFollowingInProgress, (followingInProgress) => {
        return followingInProgress;
    });