import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from './../Services/Services';

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
