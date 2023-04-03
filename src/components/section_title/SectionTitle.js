import React from "react";
import './section_title.css'

const SectionTitle = ({ label, topMargin, color }) => {
    return (
        <div className="section-title-container"
            style={{
                marginTop: topMargin ? 76 : null
            }}>
            <div className="line-design" />
            <h3 className="header-style" style={{ color: color }}>
                {label}
            </h3>

        </div>
    )
}

export default SectionTitle