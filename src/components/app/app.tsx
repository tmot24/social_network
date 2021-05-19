import {FC, lazy, Suspense, useState} from "react"
import {Route, Switch} from "react-router-dom"
import HeaderContainer from "../header/headerContainer"
import {useEffect} from "react"
import {connect} from "react-redux"
import {initializeApp} from "../../redux/app-reducer"
import {Preloader} from "../content/common/preloader/preloader"
import {Welcome} from "../content/welcome/welcome"
import {NotFound} from "../content/notFound/notFound"
import ErrorBoundary from "../content/errorBoundary/errorBoundary"
import {ThemeProvider} from "@material-ui/core/styles"
import {CssBaseline, Grid} from "@material-ui/core"
import {createMuiTheme} from "@material-ui/core/styles"
import ProfileContainer from "../content/profile/profileContainer"
import {UsersContainer} from "../content/users/usersContainer"
import {AppStateType} from "../../redux/redux-store"
import {withSuspense} from "../../hoc/withSuspense"

// const DialogsContainer = lazy(() => import("../content/dialogs/dialogs-container"))
const Chat = lazy(() => import("../content/chat/Chat"))
// for lazy loading
// const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedChatPage = withSuspense(Chat)

const App: FC<MapStatePropsType & DispatchPropsType> = ({initialized, initializeApp}) => {
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        initializeApp()
    }, [initializeApp])

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                main: "#FFFFFFFF",
            },
            secondary: {
                main: "#000000FF",
            },
        },
    })

    const preloader = (
        <div className={"app-wrapper"}>
            <Preloader/>
        </div>
    )

    if (!initialized) return preloader
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container direction={"column"}>
                <ErrorBoundary>
                    <Grid item>
                        <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode}/>
                    </Grid>
                    <Grid item style={{margin: 56, padding: 24}}>
                        <Suspense fallback={preloader}>
                            <Switch>
                                <Route path={"/"} exact component={Welcome}/>
                                <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                                {/*<Route path={"/dialogs"} component={SuspendedDialogs}/>*/}
                                <Route path={"/users"} component={UsersContainer}/>
                                <Route path={"/chat"} component={SuspendedChatPage}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Suspense>
                    </Grid>
                </ErrorBoundary>
            </Grid>
        </ThemeProvider>
    )
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

const mapDispatchToProps = {
    initializeApp,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)