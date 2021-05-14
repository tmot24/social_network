import {FC} from "react";
import {DialogItem} from "./dialogItem/dialogsItem";
import {Message} from "./message/message";
import {AddMessageForm} from "../addMessageForm/addMessageForm";
import {DialogsContainerType} from "./dialogs-container";

export const Dialogs: FC<DialogsContainerType> = ({dialogsPage, sendMessage}) => {
    return (
        <div>
            <div>
                {
                    dialogsPage.dataDialog.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id}
                                                                   img={elem.img}/>)
                }
            </div>
            <div>
                <div>
                    {
                        dialogsPage.messages.map(elem => <Message key={elem.id} message={elem.message}/>)
                    }
                </div>
                <AddMessageForm sendMessage={sendMessage} maxLength={50}/>
            </div>
        </div>
    );
};