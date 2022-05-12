import { Link } from "react-router-dom";
import classes from "./Introduce.module.css";
import Layout from "../../components/Layout/Layout";
import SSPhimIntroduce from "../../assets/SSPhimIntroduce.jpg";
import TVIntroduce from "../../assets/TVIntroduce.jpg";
import SSPhimIntroduceDowload from "../../assets/SSPhimIntroduceDowload.jfif";
import SSPhimIntroduceChildren from "../../assets/SSPhimIntroduceChildren.png";
import SSPhimIntroduceWatch from "../../assets/SSPhimIntroduceWatch.jpg";
import IntroduceSectionLeft from "../../components/IntroduceSection/IntroduceSectionLeft/IntroduceSectionLeft";
import IntroduceSectionRight from "../../components/IntroduceSection/IntroduceSectionRight/IntroduceSectionRight";
import IntroduceSectionNotPicture from "../../components/IntroduceSection/IntroduceSectionNotPicture/IntroduceSectionNotPicture";
import { useEffect, useState } from "react";

function Introduce(props) {
  const [position, setPosition] = useState(window.scrollY);
  useEffect(() => {
    function handleScroll() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div>
        <section className="bg-black">
          <div className="container m-auto">
            <div className="relative">
              <div className="w-full flex items-center justify-center">
                <div>
                  <img
                    src={SSPhimIntroduce}
                    alt="SSPhim Img Introduce"
                    className="block"
                  ></img>
                </div>
              </div>
              <div
                className={`text-white absolute top-0 left-0 w-full h-full flex items-center justify-center ${classes.backgroundColor}`}
              >
                <div className="lg:w-3/4">
                  <h1
                    className={`${classes.fontTextTitle} text-center font-bold`}
                  >
                    Chương trình truyền hình, phim không giới hạn và nhiều nội
                    dung khác.
                  </h1>
                  <h3
                    className={`${classes.fontTextContent} text-3xl text-center font-bold mt-4`}
                  >
                    Xem ở mọi nơi. Hủy bất kỳ lúc nào
                  </h3>
                  <p className={`${classes.fontText} text-center mt-4`}>
                    Bạn đã sẵn sàng chưa? Đăng ký để tạo và kích hoạt tư cách
                    thành viên của bạn
                  </p>
                  <div className="block mt-8">
                    <div
                      className={`m-auto pt-3 pb-3 pr-4 pl-4 bg-red-600 w-1/3 text-center font-bold rounded-sm ${classes.cursorPointer} ${classes.textButton}`}
                    >
                      <Link to="/register">Đăng Ký Ngay</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <IntroduceSectionLeft
          position={position}
          title={"Thưởng thức trên TV của bạn."}
          content="Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple
                    TV, đầu phát Blu-ray và nhiều thiết bị khác."
          imgUrl={TVIntroduce}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
        <IntroduceSectionRight
          position={position}
          imgUrl={SSPhimIntroduceDowload}
          title={"Tải xuống nội dung để xem ngoại tuyến."}
          content={
            "Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem."
          }
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
        <IntroduceSectionNotPicture
          position={position}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
          title={"Xem ở mọi nơi."}
          content={
            "Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV."
          }
        />
        <IntroduceSectionRight
          position={position}
          imgUrl={SSPhimIntroduceChildren}
          title={"Tạo hồ sơ cho trẻ em."}
          content={
            "Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng."
          }
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />

        <IntroduceSectionLeft
          position={position}
          title={
            "Bạn có điện thoại chứ? Hãy thử truy cập miễn phí vào trang web!"
          }
          content="Xem các bộ phim và chương trình truyền hình mới được tuyển
            chọn."
          imgUrl={SSPhimIntroduceWatch}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
      </div>
    </Layout>
  );
}
export default Introduce;
