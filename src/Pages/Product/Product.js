import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
const Product = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/addallProduct")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
       <div>
           <div>
               <Navbar></Navbar>
           </div>
           <div>
           </div>
            <div className="p-3">
            <h1>Our Products</h1>
            <div className="services d-flex justify-content-center">
                <div className="row container">
                    {services?.map((products) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={products?.image} alt="" />
                                </div>
                                <h2>{products?.name}</h2>
                                <p>{products?.dis}</p>
                                <h3 className="text-primary">Price :{products?.price}</h3>
                                <Link to={`/prosuctpurchase/${products._id}`}>
                                    <button className="btn btn-dark">Purchase</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Product;