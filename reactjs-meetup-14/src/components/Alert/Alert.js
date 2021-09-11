import React from "react"
import "./Alert.css"

const DismissibleAlert = ({variant,children, ...rest}) => {
    return(
    <div className={`cl-alert cl-alert-${variant} cl-alert-dismissible`} {...rest}>
        
        {children}
        <button className="cl-alert-dismiss">×</button>
    </div>)
}

const SimpleAlert = ({variant, children, ...rest}) => {
    return(<div className={`cl-alert cl-alert-${variant}`} {...rest}>{children}</div>)
}

export default function Alert(props){
    const {variant="primary", dismissible=false, show=true, children, ...rest} = props;
    let display;
    (show)?(display="block"):(display="none");
    return(
        (dismissible)?(<DismissibleAlert variant={variant} style={{display:`${display}`}} {...rest}>{children}</DismissibleAlert>):(<SimpleAlert variant={variant} style={{display:`${display}`}} {...rest}>{children}</SimpleAlert>)
    )
}