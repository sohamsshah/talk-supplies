import React from 'react';
import "./Button.css"

export const Button = (props) => {
    const {variant = "default", kind="filled", children, ...rest} = props;
    return (
        <button className={`cl-button cl-${variant} cl-${kind}`} {...rest}>
            {children}
        </button>
    )
}



