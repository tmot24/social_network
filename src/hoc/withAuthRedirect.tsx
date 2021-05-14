import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {}

export function withAuthRedirect<WrappedComponentProps>(WrappedComponent: React.ComponentType<WrappedComponentProps>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {

        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/"/>
        return <WrappedComponent {...restProps as WrappedComponentProps}/>
    }

    return connect<MapPropsType, DispatchPropsType, WrappedComponentProps, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)
}