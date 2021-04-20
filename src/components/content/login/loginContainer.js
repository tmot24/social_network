import {LoginForm} from "./login";
import {connect} from "react-redux";
import {login, setErrorLogin} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer = ({isAuth, login, errorMessage}) => {
    if (isAuth) {
        return <Redirect to={"profile"}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm errorMessage={errorMessage} login={login}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
    };
};

const mapDispatchToProps = {
    login, setErrorLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);