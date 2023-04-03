import React from "react";
import './info_block.css'

const InfoBlock = ({ icon, title, info }) => {
    return (
        <div className="container-info-block">
            <img src={icon} alt={'icon'} />
            <h4 className="title-info-block">{title}</h4>
            <p className="paragraph-info-block" >{info}</p>
        </div>
    )
}

export default InfoBlock