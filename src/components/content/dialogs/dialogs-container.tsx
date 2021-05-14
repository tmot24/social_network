import {connect} from "react-redux";
import {Dialogs} from "./dialogs";
import {dialogsActions} from "../../../redux/dialogs-reducer";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {ComponentType, FC} from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

export type DialogsContainerType = MapStatePropsType & DispatchPropsType

const DialogsContainer: FC<DialogsContainerType> = ({dialogsPage, sendMessage}) => {

    return (
        <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage}/>
    );
};

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    sendMessage: typeof dialogsActions.sendMessage
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = {
    sendMessage: dialogsActions.sendMessage
};

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer);