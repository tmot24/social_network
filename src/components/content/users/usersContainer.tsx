import {connect} from "react-redux"
import {
    getUsersThunkCreator, follow, unfollow, FilterType,
} from "../../../redux/users-reducer"
import React, {useEffect} from "react"
import {Users} from "./users"
import {getUsersSelector} from "./usersSelectors"
import {Preloader} from "../common/preloader/preloader"
import {UserType} from "../../../types/typs"
import {AppStateType} from "../../../redux/redux-store"

type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: React.FC<UsersContainerType> = ({
                                                          follow, unfollow, users, pageSize,
                                                          totalUsersCount, currentPage, isFetching,
                                                          followingInProgress, getUsersThunkCreator, filter,
                                                      }) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize, filter)
    }, [currentPage, getUsersThunkCreator, pageSize, filter])

    const onPageChanged = (currentPage: number) => {
        getUsersThunkCreator(currentPage, pageSize, filter)
    }

    const onFilterChanged = (filter: FilterType) => {
        getUsersThunkCreator(1, pageSize, filter)
    }

    return (
        <>
            {isFetching ? <Preloader/> : undefined}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                follow={follow}
                unfollow={unfollow}
                users={users}
                followingInProgress={followingInProgress}
                onFilterChanged={onFilterChanged}
            />
        </>
    )
}

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: UserType[],
    followingInProgress: number[],
    filter: FilterType,
}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    getUsersThunkCreator: (currentPage: number, pageSize: number, filter: FilterType) => void,
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelector(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        filter: state.usersPage.filter,
    }
}

const mapDispatchToProps = {
    follow, unfollow, getUsersThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)