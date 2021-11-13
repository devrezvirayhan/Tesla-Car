import React, { useEffect, useState } from 'react';

const MyOrder = () => {
  const email = sessionStorage.getItem("email");
    const [myorders, SetMyorders] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch(`http://localhost:7000/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>SetMyorders(data))
    },[control])
    
    return (
        <div>
          <h1>My orders </h1>
          <div className="services">
            <div className="row container">
              {myorders?.map((products) => (
                <div className="col-md-4">
                  <div className="service border border p-3">
                    <div className="services-img ">
                      <img className="img-fluid img-thumbnail p-3" src={products?.image} alt="" />
                    </div>
                    <h2>{products?.name}</h2>
                    <p>{products?.dis}</p>
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