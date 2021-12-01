import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewProduct, listProductDetails, updateProduct } from "../actions/productActions";
import axios from "axios";

const EditProductScreen = ({ history, match }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading: loadingPr, product } = productDetails;

  const uploadFileHandle = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    console.log(formData)
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/upload', formData, config)
        setImage(data)
        setUploading(false)
    } catch (error) {
        setUploading(false)
    }
  }

  console.log(product)

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, history]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setImage(product.image);
      setPrice(product.price);
      setCountInStock(product.countInStock);
    }
  }, [product])


  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(updateProduct(
      match.params.id,
      {
        name: name,
        image: image,
        description: description,
        price: price,
        countInStock: countInStock,
      }
    ))
    history.push(`/admin/product/${match.params.pathname}`)
  };

  return (
    loadingPr ? <></> :
      <FormContainer>
        <h1>Chỉnh sửa thông tin sản phẩm </h1>
        {error && <Message variant="danger">{error} </Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="text">
            <Form.Label> Tên sản phẩm </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên sản phẩm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group controlId="text">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập mô tả cho sản phẩm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group controlId="Image">
            <Form.Label> Ảnh </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập URL ảnh"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control type='file' id='image-file' label='Choose file' custom onChange={uploadFileHandle}></Form.Control>
            {uploading && <Loader />}
          </Form.Group>

          <br></br>
          <Image src={image} alt={name} fluid rounded></Image>
          <br></br>

          <Form.Group controlId="text">
            <Form.Label> Giá sản phẩm </Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập giá"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group controlId="text">
            <Form.Label>Số lượng tồn kho </Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập số lượng tồn kho"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button type="submit" variant="primary">
            Xác nhận
          </Button>
        </Form>
      </FormContainer>
  );
};

export default EditProductScreen;
