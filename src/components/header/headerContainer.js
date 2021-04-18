import {Header} from "./header";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


const HeaderContainer = ({isAuth, login, getAuthUserData}) => {

    useEffect(() => {
        getAuthUserData();
    }, [getAuthUserData]);

    return (
        <Header isAuth={isAuth} login={login}/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);