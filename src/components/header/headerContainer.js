import {Header} from "./header";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


const HeaderContainer = ({isAuth, login, getAuthUserData, logout}) => {

    useEffect(() => {
        getAuthUserData();
    }, [getAuthUserData]);

    return (
        <Header isAuth={isAuth} login={login} logout={logout}/>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

const mapDispatchToProps = {
    getAuthUserData,
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);