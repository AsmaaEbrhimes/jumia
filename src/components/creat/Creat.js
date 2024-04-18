
import "./Creat.css";
import img_creat from "../../Image/91375-lMmtoU-2048x1633.webp";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import camera from "../../Image/images.jpg";
import { useState, useRef } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const CreatProduct = () => {
    const navhome = useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [Category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [amount, setamount] = useState("");
    const ref = useRef("");

    const reset = () => {
        setName("");
        setPrice("");
        setDesc("");
        setCategory("");
        setImage("");
    };

    const handelImage = (e) => {
        const imges = e.target.files[0];
        if (imges === "") {
            alert("no found imges");
        } else {
            setImage(imges);
        }
    };

    const supmitDataFromProduct = (e) => {
        e.preventDefault();
        const cookie = Cookies();
        const token = cookie.get("token");
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        };

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("image", image);
        formData.append("category", Category);
        formData.append("amount", amount);

        axios
            .post(
                "https://backfood2-1traner.onrender.com/api/product/create",
                formData,
                { headers: headers }
            )
            .then((res) => {
                toast.success('🦄 لقد انشئت منتجك بنجاح', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                reset();
                setTimeout(() => {
                    navhome("../content")
                }, 4000);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="creat_product">
                <h3>انشيء منتجك بسهولة على موقع جوميا للتسوق</h3>
                <p>يتطلب شحن التوصيل</p>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <img className="creat_image" src={img_creat} alt="" />
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <form onSubmit={supmitDataFromProduct} className="form_creat_product">
                            <label>اضف عنوان المنتج الخاص بك</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            <label>اضف سعر المنتج الخاص بك</label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" />

                            <label>اضف وصف المنتج الخاص بك</label>
                            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
                            <label>اضف الكمية الخاصة بالمنتج الخاص بك</label>
                            <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} />

                            <label>حدد التصنيف الخاص بالمنتج الخاص بك</label>
                            <select value={Category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Fashion</option>
                                <option>clothing</option>
                                <option>Healthy&buttey</option>
                                <option>Kids</option>
                            </select>

                            <label className="upload" htmlFor="image_upload">
                                <img onClick={() => ref.current.click()} className="camera_image" src={camera} alt="" />
                            </label>
                            <input onChange={(e) => handelImage(e)} ref={ref} type="file" id="image_upload" />
                            {image && <img style={{ height: "350px", width: "90%", marginBottom: "10px", borderRadius: "10px" }} src={URL.createObjectURL(image)} alt="" />}
                            <div className="parent_btn">
                                <button className="btn_send" type="submit">اضف منتجك</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default CreatProduct;
