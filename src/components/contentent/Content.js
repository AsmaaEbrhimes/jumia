


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import ScrollTop from "../Scroll/Scroll";
import Sgaring from "../sharing/sharing";

import img_1 from "../../Image/DesktopAR (1).png";
import img_2 from "../../Image/DesktopAR (2).png";
import img_3 from "../../Image/DesktopAR (3).png";
import icon_1 from "../../Image/1.png";
import icon_2 from "../../Image/4.png";
import icon_3 from "../../Image/5.png";
import animate from "../../Image/218x184AR.gif";
import { useTranslation } from 'react-i18next';
import "./Content.css";

const Content = () => {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ backgroundColor: '#eee' }}>
                <Container>
                    <Sgaring />
                    <ScrollTop />
                    <Row className="row">
                        <Col xs="12" md="3" xl="3">
                            <ul className="list_content">
                                <li><i className="fa-solid fa-apple-whole mr-2 ml-2 mb-2"></i>{t('supmarket')}</li>
                                <li><i className="fa-solid fa-shirt mr-2 ml-2  mb-2"></i>{t('Fashion')}</li>
                                <li><i className="fa-solid fa-x-ray mr-2 ml-2  mb-2"></i> {t('Healthy&beatuy')}</li>
                                <li><i className="fa-solid fa-baby mr-2 ml-2 mb-2"></i> {t('Babyproducts')}</li>
                                <li><i className="fa-solid fa-phone mr-2 ml-2  mb-2"></i> {t('PHONE&Tbels')}</li>
                                <li><i className="fa-solid fa-house-user mr-2 ml-2 mb-2"></i> {t("Home&funture")}</li>
                                <li><i className="fa-solid fa-blender-phone  mr-2 ml-2 mb-2"></i> {t('Applinaces')}</li>
                                <li><i className="fa-solid fa-tv mb-2 mr-2 ml-2 "></i> {t('Tv&Audio')}</li>
                                <li><i className="fa-solid fa-desktop mr-2 ml-2  mb-2"></i> {t('computer')}</li>
                                <li><i className="fa-solid fa-futbol mr-2 ml-2 mb-2"></i> {t('sportingGoods')}</li>
                                <li><i className="fa-solid fa-vr-cardboard mr-2 ml-2  mb-2"></i> {t('gmaing')}</li>
                                <li><i className="fa-solid fa-layer-group mr-2 ml-2  mb-2"></i> {t('other categories')}</li>
                            </ul>
                        </Col>

                        <Col xs="12" md="6" xl="7" >
                            <div className="center_img">
                                <Carousel className="Carousel" interval={5000}>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_2}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_3}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                        </Col>

                        <Col xs="12" md="2" xl="2">
                            <div>
                                <div className="right_content">
                                    <div className="flex_selling"><img src={icon_1} alt="" /><div><h3>{t('Sale In jumia')}</h3><p>{t("increse seles")}</p></div></div>
                                    <div className="flex_selling"><img src={icon_1} alt="" /><div><h3>{t("discount")}</h3><p>{t("save")}</p></div></div>
                                    <div className="flex_selling"><img src={icon_2} alt="" /><div><h3>{t("confirmation")}</h3><p>{t("in sales")}</p></div></div>
                                </div>
                                <div className="animated"><img src={animate} alt="" /></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content;
