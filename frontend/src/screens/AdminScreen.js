import React, {  useEffect } from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails} from "../actions/userActions";
import { listCategories, deleteCategory, addNewCategory} from "../actions/categoryAction";
import { Link } from 'react-router-dom'

const AdminScreen = ({ history }) => {
  
    const dispatch = useDispatch();
  
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const deleteOneCategory = useSelector((state) => state.deleteOneCategory)
    const {success: successDeleteCategory} = deleteOneCategory

    const addOneCategory = useSelector((state) => state.addOneCategory)
    const {success: successAddCategory} = addOneCategory

    const categoryList = useSelector((state) => state.categoryList || {})
    const { loading: loadingCategories, error: errorCategories, categories} = categoryList


        useEffect(() => {
      if (!userInfo) {
        history.push("/login");
      }
      else {
        if (!user?.name) {
          dispatch(getUserDetails('profile'));
        }  
        dispatch(listCategories());

        
        if(successDeleteCategory){
            dispatch(listCategories());
        }
    }
    }, [dispatch, history, userInfo, user, successDeleteCategory, successAddCategory]);
  

    const removeBrandHandler = (pathName) => {
        console.log("delete brand")
        dispatch(deleteCategory(pathName));
    }


    return (
        loading ? <></> : (!user?.isAdmin ? <h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1> : (
            <Row style={{ marginTop: "100px" }}>
                <Row>
                    {loadingCategories ? <Loader /> : errorCategories ? <Message variant='danger'>{errorCategories}</Message> : (
                        <Col>
                            <div>
                                <div className="add-brand">
                                        <h2>Categories</h2>
                                        <button type="button" className="add-brand-btn"><Link to={`/admin/add/category`}>Add Category +</Link></button>
                                </div>
                            </div>
                            <div className="add-brand-overlay">
                                <div className="add-brand-title">
                                    <Col md={10}>
                                        <Table striped bordered hover responsive className='table-sm'>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name Brand</th>
                                                    <th>

                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories.map(category => (
                                                    <tr key={category._id}>
                                                        <td>{category._id}</td>
                                                        <td><Link to={`/admin/product/${category.pathName}`}>{category.categoryName}</Link></td>
                                                        <td>
                                                            <Button type='button' variant='light' onClick={() => removeBrandHandler(category.pathName)}><i className='fas fa-trash'></i></Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </div>
                            </div>
                        </Col>

                    )}
                </Row>
            </Row>
        )
        ))
}




export default AdminScreen;
