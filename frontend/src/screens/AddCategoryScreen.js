import React, { useState, useEffect } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewCategory} from "../actions/categoryAction";
import axios from "axios";

const AddCategoryScreen = ({ location, history }) => {
  const [categoryName, setCategoryName] = useState("");
  const [pathName, setPathName] = useState("");

  const [uploading, setUploading] = useState(false)
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }
    
  }, [dispatch, history, userInfo, redirect, user ]);

  

 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewCategory(
      categoryName,
      pathName,
    ))
    history.push('/admin/category')
  };

  return (
    <FormContainer>
      <h1>Thêm danh mục</h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label> Tên </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên danh mục"
            onChange={(e) => setCategoryName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label> Đường dẫn </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập đường dẫn cho danh mục"
            onChange={(e) => setPathName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Xác nhận
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCategoryScreen;
