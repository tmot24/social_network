import {lazy, Suspense, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "../header/headerContainer";
import LoginContainer from "../login/loginContainer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import {Preloader} from "../content/common/preloader/preloader";
import {Welcome} from "../content/welcome/welcome";
import {NotFound} from "../content/notFound/notFound";
import ErrorBoundary from "../content/errorBoundary/errorBoundary";
import {Test} from "../content/test/test";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline, Grid} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
import ProfileContainer from "../content/profile/profileContainer";
import {Login} from "../login/login";
import {AssistantContent} from "../header/assistantContent";
import {drawerWidth} from "../header/header";

const DialogsContainer = lazy(() => import("../content/dialogs/dialogs-container"));

const useStyles = makeStyles(theme => ({

    appBar: {
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const App = ({initialized, initializeApp}) => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);
    const classes = useStyles();

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
    });

    const preloader = (
        <div className={"app-wrapper"}>
            <Preloader/>
        </div>
    );

    if (!initialized) return preloader;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container direction={"column"}>
                <ErrorBoundary>
                    <Grid item>
                        <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode}/>
                    </Grid>
                    <Grid item className={classes.appBar} style={{margin: 56, padding: 24}}>
                        <Suspense fallback={preloader}>
                            <Switch>
                                {/*<Route path={"/"} exact component={Welcome}/>*/}
                                {/*<Route path={"/profile/:userId?"} component={ProfileContainer}/>*/}
                                {/*<Route path={"/dialogs"} component={DialogsContainer}/>*/}
                                {/*<Route path={"/test"} component={Test}/>*/}
                                {/*<Route component={NotFound}/>*/}
                            </Switch>
                        </Suspense>
                    </Grid>
                    <Grid item style={{margin: 56}}>
                        <AssistantContent/>
                    </Grid>
                </ErrorBoundary>
            </Grid>
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