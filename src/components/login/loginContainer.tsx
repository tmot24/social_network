import {useDispatch, useSelector} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {Login, LoginValuesType} from "./login"
import {AppStateType} from "../../redux/redux-store"

export const LoginContainer = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const errorMessage = useSelector((state: AppStateType) => state.auth.errorMessage)

    const dispatch = useDispatch()

    const onSubmit = (data: LoginValuesType) => {
        dispatch(login(data.email, data.password, data.rememberMe, data.captcha))
    }

    return (
        <Login errorMessage={errorMessage} onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    )
}