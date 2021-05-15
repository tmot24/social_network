import {Header} from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import React, {FC} from "react";

export type HeaderContainerPropsType = {
    logout: () => void,
    isAuth: boolean,
    login: string | null,
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContainer: FC<HeaderContainerPropsType> = ({isAuth, login, logout, darkMode, setDarkMode}) => {
    return (
        <Header isAuth={isAuth} login={login} logout={logout} darkMode={darkMode} setDarkMode={setDarkMode}/>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);