import {useForm} from "react-hook-form";

export const LoginForm = ({login, password, rememberMe}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder={"Login"} {...register("login")}/>
            </div>
            <div>
                <input type="password" placeholder={"Password"}
                       {...register("password", ({
                           required: "обязательно",
                           minLength: {
                               value: 2,
                               message: "Меньше 2"
                           }
                       }))}/>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <input type="checkbox" {...register("rememberMe")}/> remember me
            </div>
            <div>
                <input type="submit" value={"Login"}/>
            </div>
        </form>
    );
};