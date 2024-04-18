


import "./Shopping.css"
import img_shopping from "../../Image/cart.668e6453.svg"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "cookie-universal";
import { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import axios from "axios";

const Shopping = () => {
    const [showcart, setShowcart] = useState([])
    const [cat, setCat] = useState("")
    const [value, setValue] = React.useState([20, 37]);

    const getSupTotal = () => {
        const total = showcart?.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        const formattedTotal = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(total);
        return {
            total,
            formattedTotal
        };
    };

    const filterByCategory = (e) => {
        if (e && e.target && e.target.value) {
            const selectedCategory = e.target.value;
            setCat(selectedCategory);
            const filteredProducts = showcart.filter((product) => product.category === selectedCategory);
            setShowcart(filteredProducts);
        }
    };


    function valuetext(value) {
        return `${value}°C`;
    }
    const filterPriceProduct = (event, newValue) => {
        setValue(newValue);
        console.log(value)
        const filteredProducts = showcart.filter((ele) => ele.price >= newValue[0]);
        setShowcart(filteredProducts);
    };


    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/cart/All",
            {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => {

                setShowcart(res.data)

            })
            .catch((err) => console.log(err))

    }, [])


    const delteProductfromShopping=(id)=>{
        axios.delete(`https://backfood2-1traner.onrender.com/api/cart/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => {
          
            setShowcart(del =>del.filter((ele) => ele._id !== id))

    })
}


    return (
        <>
            <Container>
                <div className="supTotal">
                    <span className="green_price">total price: {getSupTotal().formattedTotal}</span>
                    <span className="item_lenght">length: {showcart?.length} </span>
                </div>

                <div className="content_shopping_header">
                    <img src={img_shopping} alt="" />
                    <div>
                        <p>تصفح الفئات واكتشف أفضل عروضنا!</p>
                        <Link to="/content">
                            <button>بدء التسوق</button>
                        </Link>
                    </div>
                </div>

                <Row className="content_product_shopping">
                    <Col md="2" className="Action_cart">
                        <div className="select_cat">
                            <select onChange={(e) => filterByCategory(e)}>
                                <option>cart</option>
                                <option>cart</option>
                                <option>cart</option>
                            </select>
                        </div>


                        <div className="range_slider">
                            <Box sx={{ width: 200 }}>
                                <Slider

                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={filterPriceProduct}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Box>
                        </div>
                    </Col>

                    <Col sm="7" md="10">
                        <div className="products_cart">
                            {showcart && showcart.length > 1 && (
                                showcart.map((ele) => (
                                    <div key={ele._id} className="product_item">
                                        <img src={ele.image} alt="" />
                                        <div className="btn_Rempove"><button onClick={()=>delteProductfromShopping(ele._id)}>Removefrom cart</button></div>
                                    </div>

                                ))
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Shopping;















