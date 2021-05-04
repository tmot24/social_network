import {lazy, Suspense, useState} from 'react';
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
import {NotFound} from "../content/notFound/notFound";
import ErrorBoundary from "../content/errorBoundary/errorBoundary";
import {Test} from "../content/test/test";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import ProfileContainer from "../content/profile/profileContainer";
import UsersContainer from "../content/users/usersContainer";

const DialogsContainer = lazy(() => import("../content/dialogs/dialogs-container"));

const App = ({initialized, initializeApp}) => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                main: "#FFFFFFFF",
            },
            secondary: {
                main: "#000000FF"
            },
        }
    })

    const preloader = (
        <div className={"app-wrapper"}>
            <Preloader/>
        </div>
    );

    if (!initialized) return preloader;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={"app-wrapper"}>
                <ErrorBoundary>
                    <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <NavBar/>
                    <div className={"app-wrapper-content"}>
                        <Suspense fallback={preloader}>
                            <Switch>
                                <Route path={"/"} exact component={Welcome}/>
                                <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                                <Route path={"/dialogs"} component={DialogsContainer}/>
                                <Route path={"/users"} component={UsersContainer}/>
                                <Route path={"/login"} component={LoginContainer}/>
                                <Route path={"/test"} component={Test}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Suspense>
                    </div>
                </ErrorBoundary>
            </div>
        </ThemeProvider>
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