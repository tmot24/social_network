import {useForm} from "react-hook-form";

export const AddMessageForm = ({sendMessage}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        sendMessage(data.newMessageBody)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea type="text" placeholder={"Enter your message"} {...register("newMessageBody")}/>
            </div>
            <div>
                <input type="submit" value={"Send"}/>
            </div>
        </form>
    );
};