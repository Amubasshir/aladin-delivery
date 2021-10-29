import React, { useEffect, useState } from 'react';
import SIngleService from '../../SingleService/SIngleService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our Services</h2>
      <div className="service-container ">
        {services.map((service) => (
          <SIngleService key={service.id} service={service}></SIngleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
