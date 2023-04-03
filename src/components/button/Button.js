import React, { useState } from "react";
import './button.css'

const Button = ({ label, marginRight, marginLeft, backgroundColor, color, fontSize }) => {
    const [focus, setFocus] = useState(false)
    return (
        <div
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            className="container-button"
            style={{
                marginRight: marginRight,
                marginLeft: marginLeft,
                backgroundColor: backgroundColor,
                color: color,
                fontSize: fontSize,
                opacity: focus ? 0.5 : 1
            }}>{label}</div>
    )
}

export default Button