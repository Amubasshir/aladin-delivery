import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post('http://localhost:7000/delivery', data).then((res) => {
      if (res.data.insertedId) {
        alert('added successfully');
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, maxLength: 200 })}
          placeholder="Name"
        />
        <textarea {...register('description')} placeholder="Description" />

        <input {...register('img')} placeholder="image url" />
        <input type="submit" />
      </form>
      <br />
    </div>
  );
};

export default AddService;
