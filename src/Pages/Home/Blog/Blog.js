import React from 'react';

const Blog = ({ blog }) => {
  const { name, img, description } = blog;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-dark">{description}</h5>
    </div>
  );
};

export default Blog;
