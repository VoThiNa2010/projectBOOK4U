import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, ListGroup, ListGroupItem, footer} from "react-bootstrap";

const Footer = () => {
  return (
    <footer class="text-center text-white bg-primary">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3 class="fw-bold">BOOK4U</h3>
              <p class="text-justify">BOOK4U là lựa chọn hàng đầu của các học sinh, sinh viên. Hãy đến với chúng tôi để sở hữu ngay những bộ giáo trịnh xịn xò nhất đến từ các trường đại học trên cả nước.</p>
            </div>
            <div class="col">
              <h3 class="fw-bold">USEFUL LINKS</h3>
              <p class="fs-5">Tài khoản</p>
              <p class="fs-5">Trở thành hội viên</p>
              <p class="fs-5">Đánh giá</p>
              <p class="fs-5">Giúp đỡ</p>
            </div>
            <div class="col">
              <h3 class="fw-bold">SOCIAL MEDIA</h3>
                <i class="fab fa-facebook-f fa-2x m-2"></i>
                <i class="fab fa-twitter fa-2x m-2"></i>
                <i class="fab fa-google fa-2x m-2"></i>
                <i class="fab fa-instagram fa-2x m-2"></i>
            </div>
            <div class="col">
              <h3 class="fw-bold text-start">CONTACT</h3>
              <p class="text-start"><i class="fas fa-home mr-3"></i> Đô thị ĐHQG, TP Thủ Đức, TP HCM</p>
              <p class="text-start"><i class="fas fa-envelope mr-3"></i> book4u@gmail.com</p>
              <p class="text-start"><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p class="text-start"><i class="fas fa-phone mr-3"></i> + 01 183 173 23</p>
            </div>
          </div>
        </div>
    </footer>
//     <div class="container my-5">
//       <footer class="text-center text-lg-start text-white" style="background-color: #929fba">
//         <div class="container p-4 pb-0">
//           <section class="">
//             <div class="row">
//               <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
//                 <h6 class="text-uppercase mb-4 font-weight-bold">
//                   Company name
//                 </h6>
//                 <p>
//                   Here you can use rows and columns to organize your footer
//                   content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                   elit.
//                 </p>
//               </div>
//               <hr class="w-100 clearfix d-md-none" />
//               <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//                 <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
//                 <p>
//                   <a class="text-white">MDBootstrap</a>
//                 </p>
//                 <p>
//                   <a class="text-white">MDWordPress</a>
//                 </p>
//                 <p>
//                   <a class="text-white">BrandFlow</a>
//                 </p>
//                 <p>
//                   <a class="text-white">Bootstrap Angular</a>
//                 </p>
//               </div>
//               <hr class="w-100 clearfix d-md-none" />
//               <hr class="w-100 clearfix d-md-none" />
//               <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//                 <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
//                 <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
//                 <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
//                 <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
//                 <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
//               </div>
//               <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
//                 <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #3b5998"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-facebook-f"></i
//                   ></a>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #55acee"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-twitter"></i
//                   ></a>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #dd4b39"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-google"></i
//                   ></a>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #ac2bac"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-instagram"></i
//                   ></a>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #0082ca"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-linkedin-in"></i
//                   ></a>
//                 <a
//                   class="btn btn-primary btn-floating m-1"
//                   style="background-color: #333333"
//                   href="#!"
//                   role="button"
//                   ><i class="fab fa-github"></i
//                   ></a>
//               </div>
//             </div>
//           </section>
//     </div>
//     <div
//          class="text-center p-3"
//          style="background-color: rgba(0, 0, 0, 0.2)"
//          >
//       © 2020 Copyright:
//       <a class="text-white" href="https://mdbootstrap.com/"
//          >MDBootstrap.com</a
//         >
//     </div>
//   </footer>
// </div>
  );
};

export default Footer;
