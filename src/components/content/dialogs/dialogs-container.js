import {connect} from "react-redux";
import {Dialogs} from "./dialogs";
import {sendMessage, } from "../../../redux/dialogs-reducer";
import {compose} from "redux";

const DialogsContainer = ({dialogsPage, sendMessage}) => {

    return (
        <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage}/>
    );
};

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
const mapDispatchToProps = {
    sendMessage
};

export default compose(connect(mapStateToProps, mapDispatchToProps), /*withAuthRedirect*/)(DialogsContainer);