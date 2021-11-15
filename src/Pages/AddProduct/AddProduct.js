
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://aqueous-badlands-48923.herokuapp.com/addProducts", {
            method: "POST",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
            console.log(data)

    }

    return (
        <div className="add-service">
            <h1>Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-3" {...register("name",)} placeholder="Frist Name" /> <br/>
                <input className="mt-3" {...register("lastName",)} placeholder="Last Name" /><br/>
                <textarea className="mt-3" {...register("Discptrion",)} placeholder="Descptrion" /><br/>
                <input className="mt-3" type="number" {...register("price", {})} placeholder="Price" /><br/>
                <input className="mt-3" {...register("img",)} placeholder="Image URL" /><br/>
                <input className="mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;

















