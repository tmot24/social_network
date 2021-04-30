import {Header} from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = ({isAuth, login, logout, darkMode, setDarkMode}) => {
    return (
        <Header isAuth={isAuth} login={login} logout={logout} darkMode={darkMode} setDarkMode={setDarkMode}/>
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