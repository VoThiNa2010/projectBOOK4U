import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfCategory } from "../actions/categoryAction";
import {Container } from "react-bootstrap";
import Product from "../components/Product";
import { listCategories } from "../actions/categoryAction";
import Cate from "../components/Cate"
import Advertisement from "../components/Advertisement"
import "../components/MyStyle.css"

function Hello({ match }) {
  const dispatch = useDispatch();
  const productListOfCategory = useSelector((state) => state.productListOfCategory || {});
  const { ProductsOfCategory } = productListOfCategory; //Now list is in listProductOfBrand
   const categoryList = useSelector((state) => state.categoryList || {});
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listProductsOfCategory(match.params.pathName));
    
  }, [dispatch, match]);

  return (
    <>
      <Advertisement />
      <Container>
      <div id="brand-list">
          {(categories || []).map((cate) => (
            <div key={cate._id}>
              <Cate cate={cate} />
            </div>
          ))}
        </div>
        </Container>
      
      <Container>
          <Row>
          {(ProductsOfCategory || []).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
         </Row>
        </Container>
     
    </>
  );
}

export default Hello;
