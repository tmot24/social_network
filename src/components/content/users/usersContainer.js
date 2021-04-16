import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching, follow, unfollow
} from "../../../redux/users-reducer";
import {useEffect} from "react";
import axios from "axios";
import {Users} from "./users";
import {Preloader} from "../common/preloader/preloader";

const UsersContainer = ({
                            follow,
                            unfollow,
                            users,
                            setUsers,
                            pageSize,
                            totalUsersCount,
                            currentPage,
                            setCurrentPage,
                            setTotalUsersCount,
                            isFetching,
                            toggleIsFetching,
                        }) => {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                setTotalUsersCount(response.data.totalCount);
            });
    }, [setTotalUsersCount]);

    useEffect(() => {
        toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
            });
    }, [currentPage, pageSize, setUsers, toggleIsFetching]);

    const onPageChanged = (pageNumber) => {
        toggleIsFetching(true);
        setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                toggleIsFetching(false);
                setUsers(response.data.items);
            });
    };

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                follow={follow}
                unfollow={unfollow}
                users={users}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);