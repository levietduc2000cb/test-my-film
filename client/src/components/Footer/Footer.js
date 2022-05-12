import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <div className="bg-black">
      <div className="container m-auto bg-black">
        <div className="w-5/6 m-auto pt-12 pb-12">
          <div className="text-white">
            <a href="/">Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
          </div>
          <div
            className={`grid ${classes.gridTemplateColumns} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white mt-6`}
          >
            <div className="flex flex-col">
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Câu hỏi thường gặp
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Quan hệ với nhà đầu tư
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Quyền riêng tư
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Kiểm tra tốc độ
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Trung tâm trợ giúp
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Việc làm
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Tùy chọn cookie
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Thông báo pháp lý
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Tài khoản
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Các cách xem
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Thông tin doanh nghiệp
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Chỉ có trên SSPhim
              </a>
            </div>
            <div className="flex flex-col">
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Trung tâm đa phương tiện
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Điều khoản sử dụng
              </a>
              <a href="/" className={`mt-1 mb-1 ${classes.footerHover}`}>
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-slate-500 text-white mt-10">
        Code bởi Đức
      </div>
    </div>
  );
}
export default Footer;
