import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AdminAddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://aqueous-badlands-48923.herokuapp.com/addAdmin', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added SuccessFully')
                }
                reset()
            })
    }
    return (
        <div>
            <div>
            </div>
            <div className="add-service mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-3" {...register("Name",)} placeholder="Product Name" /> <br/>
                <textarea className="mt-3" {...register("Discptrion",)} placeholder="Product Descptrion" /><br/>
                <input className="mt-3" type="number" {...register("Price", {})} placeholder="Product Price" /><br/>
                <input className="mt-3" {...register("img",)} placeholder="Image URL" /><br/>
                <input className="mt-3" type="submit" />
                </form>
            </div>
        </div>
    );
};
   
export default AdminAddProduct;