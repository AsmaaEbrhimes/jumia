import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css"


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const [number, setNumber] = useState("")
    const navs = useNavigate()
    const supmit = (e) => {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (name === "" || email === "" || password.length < 8) {
            flag = false
        } else flag = true
        if (flag) {
            axios.post('https://backfood2-1traner.onrender.com/register', {
                userName: name,
                email: email,
                password: password,
                phone: number
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
                    setTimeout(() => {
                        navs("login")
                    }, 4000);

                })
                .catch((err) => console.log(err))
        }
    }
    return (
        <>

            <div className="parent">
                <form onSubmit={supmit}>
                    <label>ENTER NAME :</label>
                    <input placeholder="Enter name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {accept && name === "" && <p style={{ color: "red" }}>Enter your Name Please</p>}
                    <label>ENTER EMAIL :</label>
                    <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>ENTER Number :</label>
                    <input placeholder="Enter Phone" type="number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                    {accept && email === "" && <p style={{ color: "red" }}>The Email is required</p>}
                    <label>ENTER Password :</label>
                    <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {accept && password.length < 8 && <p style={{ color: "red" }}>password must be more than 8 char</p>}
                    <div className="btn_supmit">
                        <button type="submit">Register</button>
                        <ToastContainer />
                    </div>
                    <Link to="/login"><h3 className="font">Already have an account</h3></Link>
                </form>

              
            </div>
        </>
    )
}


export default Signup;

