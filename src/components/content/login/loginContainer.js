import {LoginForm} from "./login";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer = ({isAuth, login}) => {
    if (isAuth) {
        return <Redirect to={"profile"}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);