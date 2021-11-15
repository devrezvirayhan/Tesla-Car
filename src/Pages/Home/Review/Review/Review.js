import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Navbar/Navbar';
import './Review.css';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/names', data)
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
                <Navbar></Navbar>
            </div>
            <div className="add-service mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name",)} placeholder="Frist Name" />
                    <input {...register("lastName",)} placeholder="Last Name" />
                    <textarea {...register("Discptrion",)} placeholder="Descptrion" />
                    <select {...register("review")}>
                        <option value="">Plz Checked Your Option</option>
                        <option value="Good">Good</option>
                        <option value="Nice">Nice</option>
                        <option value="Supper">Supper</option>
                        <option value="Excllent">Excllent</option>
                        <option value="Wow">Wow</option>
                        <option value="Very Nice">Very Nice</option>
                        <option value="Bad">Bad</option>
                    </select>
                    <input className="mt-3" type="submit" />
                </form>
            </div>
        </div>
    );
};
export default Review;