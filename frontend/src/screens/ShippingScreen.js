import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import {saveShippingAddress} from '../actions/cartAction'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart


  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

const dispatch = useDispatch()



 const submitHandler = (e) => {
     e.preventDefault()
     dispatch(saveShippingAddress({address, city, postalCode, country}))
     history.push('/payment')
 }

  return (
    <FormContainer>

      <CheckoutSteps step1 step2 />
      <h1>Địa chỉ giao hàng</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Địa chỉ chi tiết</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập địa chỉ chi tiết"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="City">
          <Form.Label>Xã/ Quận</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập xã/quận của bạn"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Huyện</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập huyện"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Tỉnh</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tỉnh"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type = 'submit' variant = 'primary'>
            TIẾP TỤC
        </Button>


      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
