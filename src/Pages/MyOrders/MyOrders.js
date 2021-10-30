import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/delivery/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <h2> Details of : {order.name} </h2>
      <h2> Details of : {orderId} </h2>
    </div>
  );
};

export default MyOrders;
