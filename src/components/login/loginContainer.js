import {connect} from "react-redux";
import {login, setErrorLogin} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Login} from "./login";

const LoginContainer = ({isAuth, login, errorMessage, captchaUrl}) => {
    if (isAuth) {
        return <Redirect to={"profile"}/>;
    }

    return (
            <Login errorMessage={errorMessage} login={login} captchaUrl={captchaUrl}/>
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