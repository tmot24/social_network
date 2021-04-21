import "./app.css";
import {NavBar} from "../navBar/navBar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "../content/dialogs/dialogs-container";
import UsersContainer from "../content/users/usersContainer";
import ProfileContainer from "../content/profile/profileContainer";
import HeaderContainer from "../header/headerContainer";
import LoginContainer from "../content/login/loginContainer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import {Preloader} from "../content/common/preloader/preloader";

const App = ({initialized, initializeApp}) => {

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    if (!initialized) return (
        <div className={"app-wrapper"}>
            <Preloader/>
        </div>);

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                    <Route path={"/dialogs"} component={DialogsContainer}/>
                    <Route path={"/users"} component={UsersContainer}/>
                    <Route path={"/login"} component={LoginContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};

const mapDispatchToProps = {
    initializeApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);