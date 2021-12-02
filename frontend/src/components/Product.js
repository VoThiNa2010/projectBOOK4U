import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./MyStyle.css"


const Product = ({ product }) => {
   const addDecimals = (num) => {
      return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
      
  };
  product.price = addDecimals(product.price)
  return (
    <Card className="my-3 p-3 rounded">
      <Link  to={`/product/${product._id}`}>
        <img className="product-image" src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <div className = "product-name">
            <strong>{product.name}</strong>
          </div>
        </Link>
        
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} đánh giá`}
          />
        </Card.Text>
        <Card.Text>
          <div className="product-price">{product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
