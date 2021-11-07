import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, ListGroup, ListGroupItem } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        
            <Row>
            <Col sm>
            <p>Hỗ trợ khách hàng</p>
            <p>Hotline: 0365480412</p>
            <p>Các câu hỏi thường gặp</p>
            <p> Gửi yêu cầu hỗ trợ</p>
            <p>Phương thức vận chuyển</p>
            <p>Chính sách đổi trả</p>
            <p>Gmail hỗ trợ khách hàng</p>
            <p>Báo lỗi bảo mật</p>
            </Col>
            <Col sm>
                <h4>Về BOOK4U</h4>
                <p>Giới thiệu về BOOK4U</p>
                <p>Chính sách bảo mật thanh toán</p>
                <p>Chính sách bảo mật thông tin cá nhân</p>
                <p>Điều khoản sử dụng</p>
            </Col>
            <Col sm>
                <h4>Sản phẩm</h4>
            </Col>
            <Col sm> 
            Kết nối với chúng tôi</Col>
            </Row>

        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
