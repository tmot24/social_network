import {LoginForm} from "./login";
import {compose} from "redux";
import {connect} from "react-redux";

export const LoginContainer = ({
                                   login, password, rememberMe,
                               }) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login} password={password} rememberMe={rememberMe}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        login: state.login.login,
        password: state.login.password,
        rememberMe: state.login.rememberMe,
    };
};

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps),/*withAuthRedirect*/)(LoginContainer);