import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Col, Spinner } from "react-bootstrap";
import { getAllProducts } from "./actions/action";
import Image from 'react-bootstrap/Image';

const Home = () => {
    const productstate = useSelector(state => state.post);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    

    return (        
        <div className="container"> 
            <div style={{textAlign: "center", marginTop: "10px"}}>
                {productstate.isLoadingProduct ? <Spinner animation="border" variant="success" /> : "" }
            </div>
             <div className="container card-container">
            {  
                productstate.products.map((product, index) => (
                    <div className="card-item" key={index} >
                    <div className="card text-white bg-success mb-3 fixed-height-card">
                        <div className="card-header">{product.category}</div>
                        <div className="card-body">
                            <p className="card-title">{product.title}</p>
                            <p className="card-text">Price : {product.price}</p>
                            <Col xs={6} md={4}>
                                <Image src={product.image} thumbnail />
                            </Col>
                            <p className="card-text">Rate : {product.rating.rate}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Home;