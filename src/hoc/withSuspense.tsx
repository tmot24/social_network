import React, {ComponentType} from "react"
import {Preloader} from "../components/content/common/preloader/preloader";

function withSuspense<WrappedComponentProps>(WrappedComponent: ComponentType<WrappedComponentProps>) {
    return (props: WrappedComponentProps) => {
        return <React.Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}

export {withSuspense};