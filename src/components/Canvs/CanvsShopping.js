
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios";
import Cookies from "cookie-universal";
import { useState, useEffect } from "react";
import shopping from "../../Image/images (1).jpg"


import { Link } from 'react-router-dom';
import "./Canvs.css"
function Canvs({ handleShow, handleClose, show }) {
    const [datashopping, setDatashopping] = useState([])
    const [productIds, setProductIds] = useState([]);
    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/cart/All",
            {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => setDatashopping(res.data))
            .catch((err) => console.log(err))

    }, [])


    const deleteProduct = (id) => {
        axios.delete(`https://backfood2-1traner.onrender.com/api/cart/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => {
          
            setDatashopping(del => del.filter((ele) => ele._id !== id))
        })
    }

    const deleteProductAll = () => {
        const idsToDelete=datashopping.map((ele)=>ele._id)
        setProductIds(idsToDelete)
        console.log(productIds)
        axios.delete("https://backfood2-1traner.onrender.com/api/cart/deleteAll", {
            _id:productIds,
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {datashopping && datashopping.length > 0 ? (
                        <>
                            <button onClick={deleteProductAll} className='clear_shopping'>Clear All Product</button>
                            {datashopping.map((ele) => (
                                <div key={ele._id} className='show_cart'>
                                    <div className='flex'>
                                        <div>
                                            <span onClick={() => deleteProduct(ele._id)}>X</span>
                                            <img src={ele.image} alt="" />
                                        </div>
                                        <div className='details_cart'>
                                            <h5>{ele.name}</h5>
                                            <p>{ele.description}</p>
                                            <p>{ele.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <img className='imge_no_products' src={shopping} alt="No Products" />
                    )}
                    <Link to="/shopping">
                    <button className='btn_shopping'>الزهاب الي عربه التسوق</button>
                    
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



export default Canvs;