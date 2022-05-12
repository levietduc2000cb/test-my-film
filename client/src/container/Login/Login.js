import classes from "./Login.module.css";
import { useContext, useEffect } from "react";
import { AuthContent } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import SSPHim from "../../assets/SSPhim.png";
import NotificationError from "../../components/Notification/NotificationError/NotificationError";
function Login(props) {
  let navigate = useNavigate();
  const { LoginUser, authState, ResetUser } = useContext(AuthContent);
  useEffect(() => {
    if (authState.user) {
      navigate("/home");
    }
  });
  function login(e, userInput) {
    e.preventDefault();
    LoginUser(userInput);
  }
  function setErrorFasle() {
    ResetUser();
  }
  return (
    <>
      <section
        className={`h-full gradient-form ${classes.backGroundImg} md:h-screen`}
      >
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className={`xl:w-10/12 ${classes.animationAuth}`}>
              <div className="block bg-black shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto pl-12 w-48"
                          src={SSPHim}
                          alt="logo"
                        />
                        <h4 className="text-xl text-white font-semibold mt-1 mb-12 pb-1">
                          Đăng Nhập
                        </h4>
                      </div>
                      <LoginForm onLogin={login}></LoginForm>
                    </div>
                  </div>
                  <div
                    className={`lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none ${classes.backGroundImgForm}`}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        Xem phim trên SSPhim
                      </h4>
                      <p className="text-sm">
                        SSPhim là trang web xem video trực tuyến của Việt Nam,
                        nội dung chủ yếu là phim và các chương trình truyền
                        hình, rất phổ biến ở Mỹ và nhiều nước khác trên thế giới
                        mang đến đa dạng các loại chương trình truyền hình,
                        phim, phim tài liệu đoạt giải thưởng và nhiều nội dung
                        khác trên hàng nghìn thiết bị có kết nối Internet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {authState.error && (
        <NotificationError
          notification={authState.notification}
          onChangeError={setErrorFasle}
        />
      )}
    </>
  );
}
export default Login;
