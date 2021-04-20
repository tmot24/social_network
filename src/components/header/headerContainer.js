import {Header} from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = ({isAuth, login, logout}) => {
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
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);