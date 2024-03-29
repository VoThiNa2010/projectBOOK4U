import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Quay lại
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={3}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                      <Row>
                        <Col><strong>Tên sản phẩm:</strong></Col>
                    <Col>
                      <strong>{product.name}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col> <strong>Giá:</strong> </Col>
                    <Col>
                      {product.price}
                    </Col>
                  </Row>
                </ListGroup.Item>

                    <ListGroup.Item>
                      <Row> 
                      <Col><strong>Đánh giá:</strong> </Col>
                      <Col>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} bình luận`}
                  />
                  </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col><strong>Nhà xuất bản:</strong></Col>
                    <Col>
                     {product.brand}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col><strong>Thể loại:</strong></Col>
                    <Col>
                     {product.category}
                    </Col>
                  </Row>
                </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                      <Col><strong>Gía:</strong></Col>
                  <Col>    {product.price}{" "} </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item><strong>Mô tả:</strong> {product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Giá: </Col>
                      <Col>
                        <strong>{product.price} VND</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Trạng thái:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0 ? "Còn hàng" : "Hết hàng"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col> Số lượng </Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2><strong>Đánh giá bình luận</strong></h2>

              {product.reviews.length === 0 && <Message>Hiện chưa có bình luận nào!</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2><strong> Đánh giá sản phẩm</strong></h2>
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label><strong>Đánh giá</strong></Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Đánh giá sao</option>
                          <option value="1">1 - Qúa kém</option>
                          <option value="2">2 - kém</option>
                          <option value="3">3 - Bình thường</option>
                          <option value="4">4 - Tốt</option>
                          <option value="5">5 - Rất Tốt</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label><strong>Bình luận</strong></Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                        <Button type="submit" variant="primary">
                          Gửi
                        </Button>
                      </Form.Group>
                    </Form>
                  ) : (
                    <Message>
                      <Link to="/login"> Đăng nhập </Link> để đánh giá sản phẩm{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
