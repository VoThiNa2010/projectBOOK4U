const products = [
  {
    name: "Giáo trình giải tích 1",
    image: "/images/18.jpg",
    description:
      "Giáo trình giai tích 1- học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 45000,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Giáo trình giải tích 2",
    image: "/images/19.jpg",
    description:
      "Giáo trình giải tích 2 - học là qua môn, không học rớt môn ráng chịu",
    brand: "Đại học Quốc Gia",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 47000,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Vật lý đại cương 1",
    image: "/images/17.jpg",
    description:
      "Vật lý đại cương- học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 29000,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Kinh tế học đại cương",
    image: "/images/14.jpg",
    description:
      "Kinh tế học đại cương- học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 48000,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Pháp luật đại cương",
    image: "/images/13.jpg",
    description:
      "Pháp luật đại cương - học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học ngoại ngữ",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price:39000,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Giáo trình tư tương Hồ Chí Minh",
    image: "/images/15.jpg",
    description:
      "Giáo trình tư tưởng Hồ Chí Minh- học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia ",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 39000,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Giáo trình Hóa sinh công nghiệp",
    image: "/images/20.jpg",
    description:
      "Giáo trình Hóa sinh công nghiệp - học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia ",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 43000,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Giáo trình Xác suất và Thống kê",
    image: "/images/21.jpg",
    description:
      "Giáo trình Xác suất và Thống kê - học là qua môn, không học rướt môn ráng chịu",
    brand: "Đại học quốc gia ",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 50000,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bí quyết học bổng",
    image: "/images/24.png",
    description:
      "Bí quyết học bổng - giúp bạn có những năm đại học dễ dàng hơn bao giờ hết",
    brand: "Đại học quốc gia ",
    category: "Sách đại cương",
    pathCategory: "daicuong",
    price: 150000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  // =============================================Quyền==========================================================
  {
    name: "Tiếng Nhật cho mọi người 2 - Bản tiếng Nhật",
    image: "/images/nn1.jpg",
    description:
      "Đam mê tiếng Nhật thì ngại gì không tậu em này về, học bao phê nhé!",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Tập viết Katakana căn bản",
    image: "/images/nn2.jpg",
    description:
      "Luyện viết Katakana? Hãy để quyển sách này giúp bạn.",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Tiếng Nhật cho mọi người 1 - Luyện nghe",
    image: "/images/nn3.jpg",
    description:
      "Nghe tiếng Nhật sẽ không còn là vấn đề nếu bạn sở hữu quyển sách này!",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Tự học tiếng Nhật dành cho người mới bắt đầu",
    image: "/images/nn4.jpg",
    description:
      "Cùng nhau học tiếng Nhật nhé",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Tiếng Nhật cho mọi người 1 - Bản dịch và giải thích Ngữ pháp",
    image: "/images/nn5.jpg",
    description:
      "Quyển sách gói đầu nằm đối với bất kì ai muốn thông thạo tiếng Nhật",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "The best preparation for IELTS",
    image: "/images/nn6.jpg",
    description:
      "Chuẩn bị kĩ càng cho kì thi IELTS đang tới",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Grammar for IELTS with answers",
    image: "/images/nn7.jpg",
    description:
      "Tổng kết ngữ pháp hay dùng trong bài thi IELTS",
    brand: "Cambridge",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 120000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "iELTS Practice Exams",
    image: "/images/nn8.jpg",
    description:
      "Cùng nhau giải một vài đề để làm quen với cấu trúc đề thi IELTS",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Bridge to IELTS",
    image: "/images/nn9.png",
    description:
      "Từ 3.5 lên 4.5 chỉ bằng một quyển sách",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 100000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Complete IELTS Band 6.5 to 7.5 - Student's Book",
    image: "/images/nn10.jpg",
    description:
      "Giúp bạn nâng band từ 6.5 lên 7.5 nhanh chóng",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "The complete guide to the TOEFLE test - Reading",
    image: "/images/nn11.jpg",
    description:
      "Hướng dẫn bạn đạt kết quả cao cho kì thi TOEFL",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 100000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Achieve TOEFL iBT Test Preparation",
    image: "/images/nn12.jpg",
    description:
      "Bí quyết chinh phục TOEFL",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "The official guide to the TOEFL Test - Third Edition",
    image: "/images/nn13.png",
    description:
      "Biến TOEFL trở thành trò chơi? Chỉ cần xem quyển sách này",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Barron's TOEFL iBT",
    image: "/images/nn14.jpg",
    description:
      "Cùng thầy Barron chinh phục TOEFL",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "TOEFL Express",
    image: "/images/nn15.jpg",
    description:
      "Chinh phụ TOEFL",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "TOEIC Analysist",
    image: "/images/nn16.jpg",
    description:
      "Phân tích, mổ xẻ đề thì TOEIC",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 80000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "TOEIC 800 Advanced Vocabulary Questions",
    image: "/images/nn17.jpg",
    description:
      "800 câu hỏi từ vựng TOEIC nâng cao",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 100000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Barron's TOEIC",
    image: "/images/nn18.jpg",
    description:
      "Cùng thầy Barron chinh phục TOEIC",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 70000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "TOEIC Vocabulary Prep",
    image: "/images/nn19.jpg",
    description:
      "Sẵn sàng cho từ vựng TOEIC",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 70000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Check your English Vocabulary for TOEIC",
    image: "/images/nn20.jpg",
    description:
      "Kiểm tra từ vựng trước kì thi TOEIC",
    brand: "Đại học quốc gia ",
    category: "Ngoại ngữ",
    pathCategory: "ngoaingu",
    price: 60000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Chuyên ngành kĩ thuật ô tô và xe máy hiện đại",
    image: "/images/cn1.jpg",
    description:
      "Học sâu về ô tô và xe máy, đây là lựa chọn hàng đầu của bạn",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 60000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Kỉ nguyên trí tuệ nhân tạo",
    image: "/images/cn2.png",
    description:
      "Lạc vào thế giới của trí thông minh robot",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 89000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Cở sở của Khoa học Máy tính",
    image: "/images/cn3.jpg",
    description:
      "Quyển sách trình bày những kiến thức căn bản về Khoa học Máy tính",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 72000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Giáo trình tiếng Anh cho Khoa học Máy tính",
    image: "/images/cn4.jpg",
    description:
      "Cùng nhau học về từ vựng chuyên ngành về Khoa học Máy tính",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Máy tính và Bộ não",
    image: "/images/cn5.jpg",
    description:
      "Sự liên hệ mật thiết giữa máy tính - bộ não và lời giải thích của các nhà khoa học",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 75000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Sản phụ khoa",
    image: "/images/cn6.jpg",
    description:
      "Sách gói đầu nằm của các sinh viên Y khoa",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 150000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "The Language of Medicine",
    image: "/images/cn7.jpg",
    description:
      "Ngôn ngữ của thuốc",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 60000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Choosing a Medical Specialty",
    image: "/images/cn8.jpg",
    description:
      "Chọn phương pháp điều trị hợp lý",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 60000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Thuật ngữ Y khoa Anh-Việt",
    image: "/images/cn9.jpg",
    description:
      "Từ ngữ chuyên ngành Y khoa torng tiếng Anh và tiếng Việt",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 49000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Kiểm tra từ vựng Y khoa",
    image: "/images/cn10.jpg",
    description:
      "Nắm vững các từ vựng y khoa hay gặp trong tiếng Anh",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 100000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Giáo trình lập và thẩm định dự án đầu tư",
    image: "/images/cn11.jpg",
    description:
      "Sách gói đầu nằm cho sinh viên kinh tế",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 180000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Giáo trình kinh tế đầu tư",
    image: "/images/cn12.jpg",
    description:
      "Học kinh tế mà không có sách này là sai lầm đó nha",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 90000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Giáo trình tài chính quốc tế",
    image: "/images/cn13.jpg",
    description:
      "Học kinh tế mà không có sách này là sai lầm đó nha",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 180000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Tài chính kế toán",
    image: "/images/cn14.jpg",
    description:
      "Sách gói đầu nằm cho sinh viên kinh tế",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 180000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Chuyên ngành cơ kí",
    image: "/images/cn15.jpg",
    description:
      "Tổng quan về ngành cơ khí, đọc phát hiểu ngay!",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 190000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Bài tập vẽ kĩ thuật cơ khí - Tập 1",
    image: "/images/cn16.jpg",
    description:
      "Sách gói đầu nằm cho sinh viên cơ khí",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Objective Mechanical Engineering for Diploma Engineers",
    image: "/images/cn17.jpg",
    description:
      "Sách gói đầu nằm cho sinh viên cơ khí",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Ngắn mạch và đứt dây trong hệ thống điện",
    image: "/images/cn18.png",
    description:
      "Tìm hiểu về các sự cố và cách giải quyết đối với các hệ thống điện",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 40000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Electrical and Mechanical Engineering",
    image: "/images/cn19.jpg",
    description:
      "Kĩ thuật Điện và Cơ khí",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 50000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Sổ tay chuyên ngành cơ khí",
    image: "/images/cn20.jpg",
    description:
      "Toàn bộ các thuật ngữ chuyên ngành cơ khí được thể hiện một cách rõ ràng, logic trong quyển sách này",
    brand: "Đại học quốc gia ",
    category: "Sách chuyên ngành",
    pathCategory: "chuyennganh",
    price: 100000,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
];

export default products;
