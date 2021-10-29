import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner.jpg';
import banner3 from '../../../images/banner/final.banner2.png';

const Banner = () => {
  return (
    <>
      <Carousel className="banner-text">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h4>Care For Your Smile</h4>
            <h1>Commited To Excellence</h1>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
