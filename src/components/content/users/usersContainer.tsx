import {connect} from "react-redux";
import {
    getUsersThunkCreator, follow, unfollow
} from "../../../redux/users-reducer";
import React, {useEffect} from "react";
import {Users} from "./users";
import {getUsersSelector} from "./usersSelectors";
import {Preloader} from "../common/preloader/preloader";
import {UserType} from "../../../types/typs";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: UserType[],
    followingInProgress: number[],
}
type MapDispatchPropsType = {
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
}
type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: React.FC<UsersContainerType> = ({
                            follow, unfollow, users, pageSize, totalUsersCount, currentPage,
                            isFetching,
                            followingInProgress, getUsersThunkCreator,
                        }) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize);
    }, [currentPage, getUsersThunkCreator, pageSize]);

    const onPageChanged = (pageNumber: number) => {
        getUsersThunkCreator(pageNumber, pageSize);
    };

    return (
        <>
            {isFetching ?
                <Preloader/> : null
            }
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                follow={follow}
                unfollow={unfollow}
                users={users}
                followingInProgress={followingInProgress}
            />
        </>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

const mapDispatchToProps : MapDispatchPropsType = {
    follow, unfollow, getUsersThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);