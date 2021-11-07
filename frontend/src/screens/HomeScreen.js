import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {Link} from 'react-router-dom'

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
        <Col sm = {3} md ={2} lg = {4} xl = {3}> 
        <ListGroup>
          <ListGroup.Item>
          <Link to = "/">Sách đại cương</Link>
          </ListGroup.Item>
          <ListGroup.Item >
          <Link to = "/">Sách cơ sở ngành</Link>
          </ListGroup.Item>
          <ListGroup.Item> <Link to = "/">Sách chuyên ngành </Link>
          </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col sm = {9} md = {10} lg ={8} xl ={9}>
        <Row>
        {(products || []).map((product) => (
          <Col key={product._id} sm = {6} md = {4} lg ={4} xl ={3}>
            <Product product={product} />
          </Col>
        ))}
        </Row>
        </Col>
        </Row>
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
