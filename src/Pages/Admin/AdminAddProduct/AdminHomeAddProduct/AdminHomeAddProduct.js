import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AdminHomeAddProduct = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://aqueous-badlands-48923.herokuapp.com/addAdmin")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
        <div>
        </div>
         <div className="p-3">
         <div className="services d-flex justify-content-center">
             <div className="row container">
                 {services?.map((products) => (
                     <div className="col-md-4">
                         <div className="service border border p-3">
                             <div className="services-img ">
                                 <img className="w-100" src={products?.img} alt="" />
                             </div>
                             <h2>{products?.name}</h2>
                             <p>{products?.description}</p>
                             <h3 className="text-primary">Price :{products?.price}</h3>
                             <Link to={`/purchase/${products._id}`}>
                                    <button className="btn btn-dark">Purchase</button>
                                </Link>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     </div>
    </div>
 );
};


export default AdminHomeAddProduct;