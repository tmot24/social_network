import "./app.css";
import {NavBar} from "../navBar/navBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "../content/news/news";
import {Music} from "../content/music/music";
import {Settings} from "../content/settings/settings";
import DialogsContainer from "../content/dialogs/dialogs-container";
import UsersContainer from "../content/users/usersContainer";
import ProfileContainer from "../content/profile/profileContainer";
import HeaderContainer from "../header/headerContainer";
import LoginContainer from "../content/login/loginContainer";

export const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"} component={ProfileContainer}/>
                    <Route path={"/dialogs"} component={DialogsContainer}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/users"} component={UsersContainer}/>
                    <Route path={"/login"} component={LoginContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
};