import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SIngleService = ({ service }) => {
  const { id, name, price, description, img } = service;
  return (
    <div className="service pb-3 ">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price:{price}</h5>
      <p className="px-5">{description}</p>
      <Link to={`/appointment/${id}`}>
        <button className="btn btn-warning">Appointment</button>
      </Link>
    </div>
  );
};

export default SIngleService;
