import {useDispatch, useSelector} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {Login, LoginValuesType} from "./login"
import {AppStateType} from "../../redux/redux-store"
import {useHistory} from "react-router-dom"

export const LoginContainer = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const errorMessage = useSelector((state: AppStateType) => state.auth.errorMessage)
    const history = useHistory()

    const dispatch = useDispatch()

    const onSubmit = (data: LoginValuesType) => {
        dispatch(login(data.email, data.password, data.rememberMe, data.captcha))
        history.push("/profile")
    }

    return (
        <Login errorMessage={errorMessage} onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    )
}