
import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>My orders </h1>

      <div className="services">
        <div className="row container">
          {services?.map((products) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={products?.image} alt="" />
                </div>

                <h2>{products?.name}</h2>
                <p>{products?.dis}</p>
                <p>{products?.dis}</p>
                <h3 className="text-danger"> Cost :{products?.price}$</h3>

                {/* <button
                  onClick={() => handleDelete(products?._id)}
                  className="btn btn-danger"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MyOrder;