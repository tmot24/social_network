import {useSelector} from "react-redux"
import {Users} from "./users"
import {Preloader} from "../common/preloader/preloader"
import {getIsFetching} from "../../../redux/selectors/usersSelectors"

export const UsersContainer = () => {
    const isFetching = useSelector(getIsFetching)

    return (
        <>
            {isFetching ? <Preloader/> : undefined}
            <Users/>
        </>
    )
}