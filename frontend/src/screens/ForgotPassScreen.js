import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNewPass } from "../actions/userActions";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Button,
} from "react-bootstrap";
import Loader from "../components/Loader";
function ForgotPassScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  
  const resetPass = useSelector((state) => state.resetPass);
  const { loading, error, success } = resetPass
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Mật khẩu không khớp");
    } else {
      dispatch(resetNewPass({email, password }));
    }
  };
  return (
    <FormContainer>
      <h1>Reset Password</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader/>}
      {success && (
        <Message variant="success">Đặt lại mật khẩu thành công</Message>
      )}
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            placeholder="Nhập email của bạn"
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="password">
          <FormLabel>Mật khẩu</FormLabel>
          <FormControl
            type="password"
            placeholder="Nhập mật khẩu mới"
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="passwordconfirm">
          <FormLabel>Xác nhận mật khẩu</FormLabel>
          <FormControl
            type="password"
            placeholder="Xác nhận mật khẩu mới"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></FormControl>
        </FormGroup>

        <br></br>
        <Row>
          <Col md={6}>
            <Link to="/login">
              <Button type="button"> Quay lại </Button>
            </Link>
          </Col>
          <Col md={6}>
            <Button type="submit" variant="primary">
              {" "}
              Xác nhận
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
}

export default ForgotPassScreen;
