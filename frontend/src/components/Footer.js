import React from "react";
import './MyStyle.css'
//import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
        <footer>
            <div className="contact" >
                <a href="https://www.facebook.com/na.vothi2010" role="button" ><i className="fab fa-facebook-f"  style={{ backgroundColor: "#3b5998" }} ></i></a>
                <a href="https://www.instagram.com/v_t_na/" role="button" ><i className="fab fa-instagram" style={{ backgroundColor: "#CD486B" }}></i></a>
                <a href="https://github.com/VoThiNa2010/projectBOOK4U" role="button" ><i className="fab fa-github" style={{backgroundColor: "#333333"}}></i></a>
            </div>
            <div className="copyright">
                © 2021 Copyrights by LKNQT
            </div>
        </footer>
    )
};

export default Footer;