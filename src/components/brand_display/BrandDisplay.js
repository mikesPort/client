import React from "react";
import './brand_display.css'

const BrandDisplay = ({ marginTop, logoOne, logoTwo, logoThree, logoFour, logoFive }) => {
    return (
        <div className="brand-row-container" style={{ marginTop: marginTop }}>
            <img src={logoOne} alt={'logo'} className='logo-brands' />
            <img src={logoTwo} alt={'logo'} className='logo-brands' />
            <img src={logoThree} alt={'logo'} className='logo-brands' />
            <img src={logoFour} alt={'logo'} className='logo-brands' />
            <img src={logoFive} alt={'logo'} className='logo-brands' />

        </div>
    )
}

export default BrandDisplay