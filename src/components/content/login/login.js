import {useForm} from "react-hook-form";
import style from "../addMessageForm/addMessageForm.module.css";

export const LoginForm = ({login}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        login(data.login, data.password, data.rememberMe)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formControl}>
                <div>
                    <input className={errors.email ? style.error : ""}
                           type="text" placeholder={"Email"}
                           {...register("email",
                               ({
                                   required: "Field is required",
                                   minLength: {
                                       value: 2,
                                       message: "Less than 2"
                                   }
                               }))}/>
                </div>
                {errors.email && <span>{errors.email.message}</span>}
                <div>
                    <input className={errors.password ? style.error : ""}
                           type="password" placeholder={"Password"}
                           {...register("password", ({
                               required: "Field is required",
                               minLength: {
                                   value: 2,
                                   message: "Less than 2"
                               }
                           }))}/>
                </div>
                {errors.password && <span>{errors.password.message}</span>}
                <div>
                    <input type="checkbox" {...register("rememberMe")}/> remember me
                </div>
                <div>
                    <input type="submit" value={"Login"}/>
                </div>
            </div>
        </form>
    );
};