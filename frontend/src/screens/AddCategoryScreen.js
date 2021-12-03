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
      <h1><strong>Thêm thể loại</strong></h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} style={{display:"flex",flexDirection:"column"}}>
        <Form.Group controlId="email">
          <Form.Label> <strong>Tên</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên thể loại"
            onChange={(e) => setCategoryName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label><strong> Đường dẫn</strong> </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập đường dẫn"
            onChange={(e) => setPathName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary"  style={{alignSelf:"center", marginTop: "16px"}}>
          Xác nhận
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCategoryScreen;
