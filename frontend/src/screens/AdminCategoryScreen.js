import React, { useEffect } from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";
import { listCategories } from "../actions/brandActions";
import { Link } from "react-router-dom";

const AdminBrandScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const categoryList = useSelector((state) => state.categoryList || {});
    const { loading, error, categories } = categoryList;

    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
        } else {
            if (!user?.name) {
                dispatch(getUserDetails("profile"));
            }
            dispatch(listCategories());
        }
    }, [dispatch, match, history, userInfo, user]);

    return loading ? (
        <Loader />
    ) : !user?.isAdmin ? (
        <h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1>
    ) : (
        <Row style={{ marginTop: "100px" }}>
            <Row>
                <Col>
                    <div className="admin-categ">
                        <div className="admin-categ-header">
                            <button type="button" className="add-brand-btn">
                                <Link to={"/admin/brand"}>Quay lại </Link>
                            </button>

                            <h2>{`Catagorys of ${match.params.name}`}</h2>

                            <button type="button" className="add-brand-btn">
                                <Link to={`/admin/add/category/${match.params.name}`}>
                                    Thêm danh mục +{" "}
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="admin-categ">
                        <div className="admin-categ-overlay">
                            <Col md={10}>
                                <Table striped bordered hover responsive className="table-sm">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên danh mục</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoryList &&
                                            categoryList.map((cate) => (
                                                <tr key={cate._id}>
                                                    <td>{cate._id}</td>
                                                    <td>
                                                        <Link
                                                            to={`/admin/product/${match.params.name}/${cate.catePathName}`}
                                                        >
                                                            {cate.cateName}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            type="button"
                                                            variant="light"
                               
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default AdminBrandScreen;
