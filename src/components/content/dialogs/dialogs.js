import style from "./dialogs.module.css";
import {DialogItem} from "./dialogItem/dialogsItem";
import {Message} from "./message/message";
import {AddMessageForm} from "../addMessageForm/addMessageForm";

export const Dialogs = ({dialogsPage, sendMessage}) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsPage.dataDialog.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id}
                                                                   img={elem.img}/>)
                }
            </div>
            <div className={style.messages}>
                <div className={style.messages}>
                    {
                        dialogsPage.messages.map(elem => <Message key={elem.id} message={elem.message}/>)
                    }
                </div>
                <AddMessageForm sendMessage={sendMessage} maxLength={50}/>
            </div>
        </div>
    );
};