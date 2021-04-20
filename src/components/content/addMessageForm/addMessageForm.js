import {useForm} from "react-hook-form";
import style from "./addMessageForm.module.css";

export const AddMessageForm = ({sendMessage, maxLength}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        sendMessage(data.newMessageBody);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formControl}>
                <div>
                <textarea className={errors.newMessageBody ? style.error : ""}
                          type="text" placeholder={"Enter your message"}
                          {...register("newMessageBody", ({
                              required: "Field is required",
                              maxLength: {value: maxLength, message: `Max length is ${maxLength} symbols`}
                          }))}/>
                </div>
                {errors.newMessageBody && <span>{errors.newMessageBody.message}</span>}
                <div>
            </div>
                <input type="submit" value={"Send"}/>
            </div>
        </form>
    );
};