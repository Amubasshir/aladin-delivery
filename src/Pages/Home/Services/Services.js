import React, { useEffect, useState } from 'react';
import SingleService from '../../SingleService/SingleService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://desolate-river-47123.herokuapp.com/delivery')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our Services</h2>
      <div className="service-container ">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
