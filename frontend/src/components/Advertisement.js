import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyStyle.css";
const Advertisement = () => {
  return (
    <div className="best-sale">
      <div className="best-sale-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638460196/BOOK4U/truong-dai-hoc-bach-khoa-tp-hcm_cvwti4.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638460005/BOOK4U/Screenshot_2021-12-02_161009_nbfgtd.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638471978/BOOK4U/262322913_4819415728120411_2693854197529363602_n_i1q424.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638471978/BOOK4U/263177568_422744759582427_5316103295627130262_n_fv7hjc.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/djedlqygu/image/upload/v1638471977/BOOK4U/261542606_417534543374846_6420075026531075379_n_jlkb4r.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
