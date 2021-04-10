import style from "./dialogs.module.css";
import {DialogItem} from "./dialogItem/dialogsItem";
import {Message} from "./message/message";

export const Dialogs = ({dataDialog, dataMessage}) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dataDialog.map(elem => <DialogItem name={elem.name} id={elem.id}/>)
                }
            </div>
            <div className={style.messages}>
                <div className={style.messages}>
                    {
                        dataMessage.map(elem => <Message message={elem.text}/>)
                    }
                </div>
            </div>
        </div>
    );
};