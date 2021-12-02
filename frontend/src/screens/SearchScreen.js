import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, ListGroup, Carousel } from "react-bootstrap";
import Product from "../components/Product";
import Advertisement from "../components/Advertisement";

import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Advertisement />
      
      <h1><strong>Kết quả tìm kiếm</strong></h1>
      {loading ? (
        <h2>
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </h2>
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
