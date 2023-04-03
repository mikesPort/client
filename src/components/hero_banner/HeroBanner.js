import React from "react";
import './hero_banner.css'
import logo from '../../assets/logo.svg'
import Button from "../button/Button";
import { Colors } from "../../colors/Colors";
import HeaderH1 from "../headers/HeaderH1";

const HeroBanner = () => {
    return (
        <header className="container">
            <div className="navbar">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <div>nav buttons this is where I would place the links</div> */}
                <Button label={'Lets Talk'} marginRight={'80px'} color={Colors.primary} />
            </div>
            <div className="banner">
                <div className="banner-text">
                    <HeaderH1
                        title={'Live with confidence'}
                        fontSize={'48px'} fontWeight={'700'}
                        color={Colors.white} />
                    <p style={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: '400',
                        marginBottom: '40px'
                    }}>Jose Mourinho brings confidence to pan-African Sanlam Campaign</p>
                    <Button
                        label={'View project'}
                        marginRight={'80px'}
                        color={Colors.white}
                        backgroundColor={Colors.primary}
                        fontSize={'14px'} />
                </div>
                <div className="banner-text" />
            </div>
        </header>
    )
}

export default HeroBanner