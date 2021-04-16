import {connect} from "react-redux";
import {Dialogs} from "./dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";

const DialogsContainer = ({dialogsPage, updateNewMessageBody, sendMessage}) => {
    return (
        <Dialogs dialogsPage={dialogsPage} updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage}/>
    )
};

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)