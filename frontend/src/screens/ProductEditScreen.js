import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {createProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

function ProductEditScreen ({ match, history }) {
  const productId = match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

 

  useEffect(() => {
    
  }, [dispatch, history]);
  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

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
      console.error(error);
      setUploading(false);
    }
  };
 
  const submitHandler = (e) => {
    console.log("huhukk")
    e.preventDefault();
    dispatch(
      createProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };
  console.log("match 2");
  return (
    <>
      <FormContainer>
        <h1>Thêm sản phẩm/ Chỉnh sửa sản phẩm</h1>
          <Form onSubmit={submitHandler} style={{display:"flex",flexDirection:"column"}}>
            <Form.Group controlId="name">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nhập tên Sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Giá sản phẩm</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập giá sản phẩm (VNĐ)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Ảnh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập url ảnh"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              
              {/* <Form.File
                id="image-file"
                lable="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File> */}
              <Form.Control
              type="file"
              required
              name="file"
              onChange={uploadFileHandler}
            />
              {uploading && <Loader />}
            </Form.Group>
            
            <Form.Group controlId="brand">
              <Form.Label>Nhà xuất bản</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập nhà xuất bản"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Số lượng tồn kho</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập Số lượng"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Thể loại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập thể loại"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập mô tả"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" style={{alignSelf:"center"}}>
              Cập nhật
            </Button>
          </Form>
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;