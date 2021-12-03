import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewProduct } from "../actions/categoryAction";
import axios from "axios";

const AddCateScreen = ({ location, history, match }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const uploadFileHandle = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    console.log(formData);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, redirect, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNewProduct(
        name,
        brand,
        match.params.pathname,
        description,
        price,
        countInStock,
        image
      )
    );
    history.push(`/admin/product/${match.params.pathname}`);
  };

  return (
    <FormContainer>
      <h1> <strong>Thêm sản phẩm</strong> </h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} style={{display:"flex",flexDirection:"column"}}>
        <Form.Group controlId="text">
          <Form.Label> <strong>Name</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên sản phẩm"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> <strong>Nhà xuất bản</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập nhà xuất bản"
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> <strong>Mô tả</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập mô tả sản phẩm"
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> <strong>Gía</strong> </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập giá sản phẩm"
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> <strong>Số lượng sản phẩm</strong></Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập số lượng sản phẩm "
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label> <strong>Hình ảnh</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập hình ảnh"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          ></Form.Control>
          <Form.Control
            type="file"
            id="image-file"
            label="Choose file"
            custom
            onChange={uploadFileHandle}
          ></Form.Control>
          {uploading && <Loader />}
        </Form.Group>
        <br></br>
        <Image src={image} alt="image" fluid rounded></Image>
        <br></br>
        <Button type="submit" variant="primary" style={{alignSelf:"center"}}>
          Xác nhận
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCateScreen;
