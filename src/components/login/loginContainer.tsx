import {FC} from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Login} from "./login";
import {AppStateType} from "../../redux/redux-store";

const LoginContainer: FC<UsersContainerType> = ({login, errorMessage, captchaUrl}) => {

    return (
        <Login errorMessage={errorMessage} login={login} captchaUrl={captchaUrl}/>
    )
};

type MapStateToPropsType = {
    errorMessage: string | null
    captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string| null) => void
}

type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl,
    };
};

const mapDispatchToProps: MapDispatchToPropsType = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);