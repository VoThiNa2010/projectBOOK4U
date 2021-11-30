import { Link } from "react-router-dom";
import React from "react";
import {Button} from 'react-bootstrap'
import "./MyStyle.css";

const Cate = ({ cate }) => {
  return (
    <div className="brand-info">
      <Button variant="outline-primary">
      <Link to={`/category/${cate.pathName}/list_product`}>
        <div className="brand-name">
          <strong>{cate.categoryName}</strong>
        </div>
      </Link>
      </Button>
    </div>
  );
};

export default Cate;
