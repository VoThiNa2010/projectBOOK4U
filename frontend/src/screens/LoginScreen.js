import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { getUserDetails, login } from "../actions/userActions";
import { listMyCart, updateAllCart } from "../actions/cartAction";
import { listMyOrders } from "../actions/orderAction";
import { cartItemsFromStorage } from "../store";
import store from "../store";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      if (!loading) {
        dispatch(listMyCart());
      }
      history.push(redirect);
    }
  }, [history, userInfo, redirect, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Đăng nhập</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} style={{display:"flex",flexDirection:"column" }}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <>
          <Button type="submit" variant="primary" style={{alignSelf:"center", marginTop: "16px"}}>
            Đăng nhập
          </Button>
        </>
      </Form>

      <Row className="py-3">
        <Col>
          Chưa có tài khoản?{"  "}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          >
            Đăng ký
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
