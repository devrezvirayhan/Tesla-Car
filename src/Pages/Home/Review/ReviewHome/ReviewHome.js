import React, { useEffect, useState } from "react";

const ReviewHome = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://aqueous-badlands-48923.herokuapp.com/names")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <div>
            </div>
             <div className="p-3">
             <h1>Review</h1>
             <div className="services d-flex justify-content-center">
                 <div className="row container">
                     {services?.map((products) => (
                         <div className="col-md-4">
                             <div className="service border border p-3">
                                 <div className="services-img ">
                                 </div>
                                 <h2>{products?.name}</h2>
                                 <h4>{products?.review}</h4>
                                 <p>{products?.Discptrion}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
        </div>
     );
};

export default ReviewHome;