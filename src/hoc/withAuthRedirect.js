import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={"login"}/>;
        return <Component {...props}/>;
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

};