import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Navbar from './../Home/Navbar/Navbar';

const Purchase = () => {
  const { productId } = useParams();
  const [service, setService] = useState({});
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:7000/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    fetch('http://localhost:7000/confromOrder', {
      method:"POST",
      headers:{"content-type": 'applacation/json'},
      body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => console.log(result))
    console.log(data)
  };

  return (

    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Confirm Order</h1> 
      <div className="booking-container">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="img-fluid img-thumbnail p-3" src={service?.img} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> Price: {service?.price}</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price",)}
                defaultValue={service?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image",)}
                defaultValue={service?.image}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;