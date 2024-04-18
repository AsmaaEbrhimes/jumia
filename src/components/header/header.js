import SettingsIcon from '@mui/icons-material/Settings';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useState } from 'react';
import img_icon from "../../Image/jumia-2.jpg"
import flassale from "../../Image/FLASHSALE1170x60AR.png"
import { Container } from "react-bootstrap"
import egypt from "../../Image/download.jpg"
import Amerca from "../../Image/download.png"
import { Link } from 'react-router-dom';
import "./header.css"
import Canvs from "../Canvs/CanvsShopping"
import AnchorTemporaryDrawer from "../drawer/Drawersetting"

const Header = ({ changeAr, changeEn }) => {
    const [show, setShow] = useState(false);
    const [showopenDrawer, setShowopenDrawer] = useState(false);
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => setShow(false)

    const changeLanguageToAr = (text) => {
        if (text === "ar") {
            changeAr()
        }
    }
    const changeLanguageToEn = (text) => {
        if (text === "en") {
            changeEn()
        }
    }


    const closedrawer = () => setShowopenDrawer(false);
    const openndrawer = () => setShowopenDrawer(true);

    return (
        <>
            <AnchorTemporaryDrawer openndrawer={openndrawer} closedrawer={closedrawer} showopenDrawer={showopenDrawer} />
            <div className="img_header"><img src={flassale} alt="" /></div>
            <div className='first_header'>
                <div className='lang'>
                    <span onClick={() => changeLanguageToAr("ar")} >ar</span><img className='ar' src={Amerca} alt="" />
                    <span onClick={() => changeLanguageToEn("en")}>en</span><img className='en' src={egypt} alt="" />
                </div>
                <Link to="/creat" style={{ textDecoration: 'none' }}>
                    <p>بيع علي جوميا</p>
                </Link>
                <div>
                    <SettingsIcon style={{ color: "black", marginRight: "4px" }}onClick={openndrawer}/>
                    <span>setting</span>
                </div>
            </div>

            <div className="two_header">
                <Container>
                    <Canvs handleShow={handleShow} handleClose={handleClose} show={show} />
                    <div className="flex_header">
                        <div onClick={handleShow} className="d-flex shopping"><p>سله التسوق</p><LocalMallIcon /></div>
                        <div className="d-flex help"><i class="cursor-pointer fa-solid fa-angle-down"></i><p>المساعده</p><i class="fa-solid fa-circle-question"></i>

                        </div>
                        <div className="search"> <button className="btn_search">ابحث</button><input placeholder="ابحث عن المنتجات والعلامات التجاريه" type="text" /></div>
                        <div><img className="jumia" src={img_icon} alt="" /></div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Header;

