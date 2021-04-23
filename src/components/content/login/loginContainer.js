import {LoginForm} from "./loginForm";
import {connect} from "react-redux";
import {login, setErrorLogin} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer = ({isAuth, login, errorMessage, captchaUrl}) => {
    if (isAuth) {
        return <Redirect to={"profile"}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm errorMessage={errorMessage} login={login} captchaUrl={captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl,
    };
};

const mapDispatchToProps = {
    login, setErrorLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);