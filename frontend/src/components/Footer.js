import React from "react";

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
              <p class="fs-5">Hỗ trợ</p>
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
  );
};

export default Footer;
