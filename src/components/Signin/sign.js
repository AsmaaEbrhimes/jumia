import axios from "axios";
import { useState } from "react";
import Cookies from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import "./sign.css"
const Sign = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const cookies = Cookies()
    const nav = useNavigate()

    const supmit = (e) => {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (email === "" || password.length < 8) {
            flag = false
        } else flag = true
        if (flag) {
            axios.post('https://backfood2-1traner.onrender.com/login', {
                email: email,
                password: password,
            })
                .then((res) => {
                    toast.success('🦄 لقد تم انشاء حساب بنجاح', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    const token = res.data.token;

                    cookies.set('token', token);
                    setTimeout(() => {
                        nav("../Dashbord")
                    }, 4500);
                   
                })
                .catch((err) => console.log(err.message))
        }
    }

    return (
        <>
            <div className="parent">
                <form onSubmit={supmit}>
                    <label>ENTER EMAIL :</label>
                    <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && email === "" && <p style={{ color: "red" }}>The Email is required</p>}
                    <label>ENTER Password :</label>
                    <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {accept && password.length < 8 && <p style={{ color: "red" }}>password must be more than 8 char</p>}
                    <div className="btn_supmit">
                        <button type="submit">Login</button>
                        <ToastContainer />
                    </div>
                    <Link style={{ textDecoration: 'none' }} to="/"><h3 className="login">I don't have an account</h3></Link>
                </form>
              
            </div>

        </>
    )
}

export default Sign;