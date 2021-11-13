import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const email = sessionStorage.getItem("email");
    const [myorders, SetMyorders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:7000/myOrders/${email}`)
        .then(res => res.json())
        .then(data => SetMyorders(data))
    },[])
    
    return (
        <div>
          <h1>My orders </h1>
          <div className="services">
            <div className="row container">
              {myorders?.map((products) => (
                <div className="col-md-4">
                  <div className="service border border p-3">
                    <div className="services-img ">
                      <img className="w-100" src={products?.img} alt="" />
                    </div>
    
                    <h6>{products?.name}</h6>
                    <p>{products?.description}</p>
                    <h3 className="text-danger">Price :{products?.price}</h3>
    
                    {/* <button
                      onClick={() => handleDelete(pd?._id)}
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