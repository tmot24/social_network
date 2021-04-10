import style from "./dialogs.module.css";
import {DialogItem} from "./dialogItem/dialogsItem";
import {Message} from "./message/message";

export const Dialogs = ({dialogsPage}) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsPage.dataDialog.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id}/>)
                }
            </div>
            <div className={style.messages}>
                <div className={style.messages}>
                    {
                        dialogsPage.dataMessage.map(elem => <Message key={elem.id} message={elem.text}/>)
                    }
                </div>
            </div>
        </div>
    );
};