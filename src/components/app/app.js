import {lazy, Suspense} from 'react';
import "./app.css";
import {NavBar} from "../navBar/navBar";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "../header/headerContainer";
import LoginContainer from "../content/login/loginContainer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import {Preloader} from "../content/common/preloader/preloader";
import {Welcome} from "../content/welcome/welcome";

const ProfileContainer = lazy(() => import("../content/profile/profileContainer"));
const UsersContainer = lazy(() => import("../content/users/usersContainer"));
const DialogsContainer = lazy(() => import("../content/dialogs/dialogs-container"));

const App = ({initialized, initializeApp}) => {

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    const preloader = (
        <div className={"app-wrapper"}>
            <Preloader/>
        </div>
    );

    if (!initialized) return preloader;
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
                <Suspense fallback={preloader}>
                    <Switch>
                        <Route path={"/"} exact component={Welcome}/>
                        <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                        <Route path={"/dialogs"} component={DialogsContainer}/>
                        <Route path={"/users"} component={UsersContainer}/>
                        <Route path={"/login"} component={LoginContainer}/>
                    </Switch>
                </Suspense>
            </div>
        </div>
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