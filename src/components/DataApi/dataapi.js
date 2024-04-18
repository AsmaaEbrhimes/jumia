import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./dataApi.css"
import { Link } from "react-router-dom";
const Dataapi = () => {
    const [dataApi, setdataApi] = useState([])

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/product/All")
            .then((res) => setdataApi(res.data))
            console.log(dataApi)
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {dataApi.length > 0 && dataApi.map((ele) => ( 
                        <Col key={ele._id}  className="data_api" xs="6" sm="6" xl="3"> 
                            <h6>{ele.name}</h6> 
                            <Link key={ele._id} to={`/Details/${ele._id}`} >
                            <img src={ele.image} alt="" />
                            </Link>
                            <p>{ele.description}</p> 
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}



export default Dataapi;