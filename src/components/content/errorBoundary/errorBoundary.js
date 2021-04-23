import React from "react";

export default class ErrorBoundary extends React.Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
        console.log(errorInfo)
    }

    render() {
        if (this.state.error) {
            return <img src="https://miro.medium.com/max/700/1*v4dLIlWpJkCiSDKv7xguLA.png" alt="error"/>;
        }
        return this.props.children;
    }
}