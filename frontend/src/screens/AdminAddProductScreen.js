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
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;
 
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

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }    
  }, [dispatch, history, userInfo, redirect, user ]);

  

 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(
      name,
      brand,
      category,
      match.params.pathname,
      description,
      price,
      countInStock,    
      
      image
    ))
    history.push(`/admin/product/${match.params.pathname}`)
  };

  return (
    <FormContainer>
      <h1>Add Category </h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="text">
          <Form.Label> Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Brand </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand name"
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Category </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Description </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description name"
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Price </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price name"
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Count In Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter count In Stock "
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label> Image URL </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          ></Form.Control>
          <Form.Control type='file' id='image-file' label='Choose file' custom onChange={uploadFileHandle}></Form.Control>
          {uploading && <Loader />}
        </Form.Group>
        <br></br>
        <Image src={image} alt="image" fluid rounded></Image>
        <br></br>
        <Button type="submit" variant="primary">
          Confirm
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCateScreen;
