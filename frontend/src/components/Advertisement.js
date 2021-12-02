import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyStyle.css";
const Advertisement = () => {
  return (
    <div className="best-sale">
      <div className="best-sale-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638460005/BOOK4U/Screenshot_2021-12-02_161009_nbfgtd.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638460196/BOOK4U/truong-dai-hoc-bach-khoa-tp-hcm_cvwti4.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074616/BQ/3_loui6z.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074615/BQ/1_tw65zp.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074057/BQ/qc4_fo8xzt.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074616/BQ/6_zpqp75.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
