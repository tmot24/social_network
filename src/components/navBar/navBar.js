import style from "./navBar.module.css";

export const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                Profile
            </div>
            <div className={style.item}>
                Messages
            </div>
            <div className={style.item}>
                News
            </div>
            <div className={style.item}>
                Music
            </div>
            <div className={style.item}>
                Settings
            </div>
        </nav>
    );
};