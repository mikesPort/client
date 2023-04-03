import React from "react";
import './case_study.css'

const CaseStudyCard = ({ image, title, description }) => {
    return (
        <div className="container-case-study" style={{ backgroundImage: image }}>
            <div >
                <div className="line" />
                <h4 className="case-study-title">{title}</h4>
                <p className="case-staudy-paragraph">{description}</p>
            </div>

        </div>
    )
}

export default CaseStudyCard