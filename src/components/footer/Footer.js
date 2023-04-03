import React from "react";
import './footer.css';
import HeaderH1 from "../headers/HeaderH1";
import SectionTitle from "../section_title/SectionTitle";
import { Colors } from "../../colors/Colors";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="contact-us-display-top" >
                <div className="title-display">
                    <SectionTitle label={'Contact us'} color={Colors.white} />
                    <div className="header-placement">
                        <HeaderH1 fontSize={'40px'} fontWeight={'700'} color={Colors.white} title={'Have a project in mind?Let\'s make it happen'} />
                    </div>
                </div>
                <div className="address-section">
                    <p className="address-text">
                        22 Lawley Road, Woodstock, 7925,<br />
                        Cape Town, South Africa<br />
                        +27 21 469 1500<br />
                        <div className="email-text">enquirie@kingjames.co.za</div>
                    </p>
                </div>
            </div>
            <div className="link-container" >
                <div className="social-links-container">
                    <p className="info-links">
                        Terms of service<br />
                        Privacy policy<br />
                        Impressum</p>
                    <p className="info-links">
                        Facebook<br />
                        Instagram<br />
                        Twitter</p>
                    <p className="info-links">
                        Github<br />
                        Linkedin<br />
                        Teams</p>
                    <p className="info-links">
                        Youtube<br />
                        Behance<br />
                        Dribbble</p>
                </div>
                <div className="job-link-container">
                    <p className="job-link-text">
                        Explore open jobs<br />
                        ©2000—2022 King James Digital
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer