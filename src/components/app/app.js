import "./app.css";
import {Header} from "../header/header";
import {NavBar} from "../navBar/navBar";
import {Profile} from "../content/profile/profile";
import {Dialogs} from "../content/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "../content/news/news";
import {Music} from "../content/music/music";
import {Settings} from "../content/settings/settings";

export const App = ({state}) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile profilePage={state.profilePage}/>}/>
                    <Route path={"/dialogs"} exact render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};