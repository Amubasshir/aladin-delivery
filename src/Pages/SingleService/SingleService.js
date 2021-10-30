import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ service }) => {
  const { _id, name, description, img } = service;
  console.log(service);
  return (
    <div className="service pb-3 ">
      <img src={img} alt="" />
      <h2>{name}</h2>

      <p className="px-5">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning">Booking</button>
      </Link>
    </div>
  );
};

export default SingleService;
