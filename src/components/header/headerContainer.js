import {Header} from "./header";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


const  HeaderContainer = ({setAuthUserData, isAuth, login}) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    setAuthUserData(id, email, login)
                }
            })
    }, [setAuthUserData])

    return (
        <Header isAuth={isAuth} login={login}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const mapDispatchToProps = {
    setAuthUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)