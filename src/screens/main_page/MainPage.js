import React from "react";
import { CaseStudyCard, HeroBanner, InfoBlock, SectionTitle, HeaderH1, BrandDisplay, Footer } from "../../components";
import './main_page.css'
import WebDevIcon from '../../assets/WebDevIcon.svg'
import UXIcon from '../../assets/UXIcon.svg'
import AppDevIcon from '../../assets/AppDevIcon.svg'
import icon from '../../assets/icon.svg'
import {
    bbcblack,
    distellblack,
    engenblack,
    liquidblack,
    microsoftblack,
    multichoiceblack,
    nikeblack,
    pnpblack,
    sanlamblack,
    santamblack,
    spotifyblack,
    tfgblack,
    tymebankblack,
    visablack,
    wesgrowblack
} from "../../assets/brands";


const MainPage = ({ serverInfo }) => {
    console.log('serverinfo', serverInfo)
    return (
        <div style={{ display: 'flex ', flexDirection: 'column' }}>
            <HeroBanner />
            <div className="content-container">
                <SectionTitle label={'What we do'} />
                <HeaderH1
                    title={'We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces'}
                    fontSize={'48px'}
                    fontWeight={'700'}
                />
                <div className="info-block-container">
                    <InfoBlock
                        icon={WebDevIcon}
                        title={'Web development'}
                        info={'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'} />
                    <InfoBlock
                        icon={UXIcon}
                        title={'User experience & design'}
                        info={'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'} />
                    <InfoBlock
                        icon={AppDevIcon}
                        title={'Mobile app development'}
                        info={'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'} />
                    <InfoBlock
                        icon={icon}
                        title={'Blockchain solutions'}
                        info={'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'} />
                </div>
                <SectionTitle label={'Case studies'} topMargin={true} />
                <div className="case-study-container">
                    {serverInfo ? serverInfo.map((item) =>
                        <CaseStudyCard
                            image={`url(${item.imageUrl})`}
                            title={item.title}
                            description={item.description}
                        />
                    ) : null}
                </div>
                <SectionTitle label={'You’ll be in good company'} topMargin={true} />
                <HeaderH1
                    title={'Trusted by leading brands'}
                    fontSize={'48px'}
                    fontWeight={'700'}
                />
                <div className="brand-container">
                    <BrandDisplay
                        marginTop={'87px'}
                        logoOne={visablack}
                        logoTwo={tymebankblack}
                        logoThree={distellblack}
                        logoFour={spotifyblack}
                        logoFive={microsoftblack}
                    />
                    <BrandDisplay
                        logoOne={engenblack}
                        logoTwo={nikeblack}
                        logoThree={wesgrowblack}
                        logoFour={multichoiceblack}
                        logoFive={pnpblack}
                    />
                    <BrandDisplay
                        logoOne={liquidblack}
                        logoTwo={tfgblack}
                        logoThree={sanlamblack}
                        logoFour={santamblack}
                        logoFive={bbcblack}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage