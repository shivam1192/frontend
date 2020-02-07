import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';

const TopCarousel = () => {
  return (
      <div>

          
    <Carousel style={{width: '100%',margin:'20px 0px', height: '30%'}}>
      <Carousel.Item>
        <img

          className="image"
          src="https://lh3.googleusercontent.com/proxy/1dkCaQgEECcUoqXBHcIHzrfS47LMUio9NFTu1MWMFaMJ6wPWNKJafON-QuVmGIOQQdY5QfZB2_2nv1Z-71_q650DRYXWPsi0nRuv0iH3Lg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://healthfundaa.com/wp-content/uploads/2017/12/teddy-day.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://stylehub.shoppersstop.com/wp-content/uploads/2016/09/banner-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
  );
};

export default TopCarousel;
