import React, { useEffect } from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfCategory } from "../actions/categoryAction";
import { Link } from "react-router-dom";
import { deleteProduct } from "../actions/productActions";

const AdminScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productListOfCategory = useSelector(
    (state) => state.productListOfCategory || {}
  );
  const { ProductsOfCategory } = productListOfCategory;

  useEffect(() => {
    dispatch(listProductsOfCategory(match.params.pathname));
  }, [dispatch, match]);
  console.log("kkk", match);

  const removeProductHandler = (id) => {
    dispatch(deleteProduct(id));
    console.log("delete product");
  };

  return (
    <Row style={{ marginTop: "100px" }}>
      <Row>
        <Col>
          <div className="admin-categ">
            <div className="admin-categ-header">
              <Link className="btn btn-light my-3" to={`/admin/category`}>
                Quay lại{" "}
              </Link>

              <button
                type="button"
                class="btn btn-outline-primary"
                style={{ alignSelf: "center", marginLeft: "300px" }}
              >
                <Link to={`/admin/add/product/${match.params.pathname}`}>
                  Thêm sản phẩm +
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
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng tồn kho</th>
                      <th>Chỉnh sửa</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(ProductsOfCategory || []).map((product) => (
                      <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.countInStock}</td>
                        <td>
                          <Button
                            type="button"
                            variant="light"
                            href={`/admin/edit/product/${product._id}/${match.params.pathname}`}
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </td>
                        <td>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() => removeProductHandler(product._id)}
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
  );
};

export default AdminScreen;
