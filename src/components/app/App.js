import "./app.css";
import {Header} from "../header/header";
import {NavBar} from "../navBar/navBar";
import {Profile} from "../profile/profile";

export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
};