import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404 (2).png';
const NotFound = () => {
  return (
    <div>
      <img style={{ width: '95%' }} src={notFound} alt="" />
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
