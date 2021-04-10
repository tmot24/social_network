import style from "./message.module.css";

export const Message = ({message}) => {
    return (
        <div className={style.message}>{message}</div>
    );
};