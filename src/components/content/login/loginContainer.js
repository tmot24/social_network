import {LoginForm} from "./login";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";

const LoginContainer = ({login}) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login}/>
        </div>
    );
};

const mapDispatchToProps = {
    login,
}

export default connect(null, mapDispatchToProps)(LoginContainer)