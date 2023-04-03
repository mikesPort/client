import React from "react";

const HeaderH1 = ({ title, fontWeight, fontSize, color }) => {
    return (
        <h style={{
            fontFamily: 'Inter',
            fontWeight: fontWeight,
            fontSize: fontSize,
            color: color,

        }}>{title}</h>
    )
}
export default HeaderH1