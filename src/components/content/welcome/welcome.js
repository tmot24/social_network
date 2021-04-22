import welcome from "../../../assets/images/welcome-home-welcome-home-de.jpg"
import style from "./welcome.module.css"

export const Welcome = () => {
    return (
        <div className={style.welcome}>
            <img src={welcome} alt="welcome"/>
        </div>
    )
}