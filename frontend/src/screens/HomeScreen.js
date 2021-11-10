import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, ListGroup, Carousel } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
     
      <h1>Danh sách sản phẩm</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Container>
              <Row>
                {(products || []).map((product) => (
                  <Col key={product._id} sm={6} md={4} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
