import {useForm} from "react-hook-form";
import style from "../addMessageForm/addMessageForm.module.css";

export const LoginForm = ({errorMessage, login, captchaUrl}) => {
    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        login(data.email, data.password, data.rememberMe, data.captcha);
    };

    const fieldOption = ({
        required: "Field is required",
        minLength: {
            value: 2,
            message: "Less than 2"
        }
    });

    const errorSpan = (field) => {
        return errors[field] && <span>{errors[field].message}</span>;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Use email: free@samuraijs.com</div>
            <div>Use password: free</div>
            <div className={style.formControl}>
                <div>
                    <input className={errors.email ? style.error : ""}
                           type="text" placeholder={"Email"}
                           {...register("email", (fieldOption))}/>
                </div>
                {errorSpan("email")}
                <div>
                    <input className={errors.password ? style.error : ""}
                           type="password" placeholder={"Password"}
                           {...register("password", (fieldOption))}/>
                </div>
                {errorSpan("password")}
                <div>
                    <input type="checkbox" {...register("rememberMe")}/> remember me
                </div>
                <div>
                    {errorMessage && <span>{errorMessage}</span>}
                </div>
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && <div>
                    <input className={errors.captcha ? style.error : ""}
                           type="text" placeholder={"Captcha"}
                           {...register("captcha", ({required: "Field is required"}))}/>
                </div>}
                <div>
                    <input type="submit" value={"Login"}/>
                </div>
            </div>
        </form>
    );
};