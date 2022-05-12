import classes from "./Header.module.css";
import SSPhimImg from "../../assets/SSPhim.png";
import LinkNav from "../UI/LinkNav/LinkNav";
import { useNavigate } from "react-router-dom";
import NavUser from "../UI/NavUser/NavUser";
import { AiFillCaretDown } from "react-icons/ai";
import { BiLogOut, BiMovie } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContent } from "../../context/AuthContext";
function Header(props) {
  const { authState, Logout } = useContext(AuthContent);
  const [showNavUser, setShowNavUser] = useState(false);
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  function logout() {
    Logout();
    navigate("/");
  }
  function moveToFavoriteMovie() {
    navigate("/home/myFavoriteFilm");
  }
  return (
    <div className="bg-black">
      <div className="container m-auto">
        <div className="bg-black flex justify-between items-center pt-4 pb-4 mr-6 ml-6">
          <div
            className={`${classes.widthImg} cursor-pointer`}
            onClick={handleClick}
          >
            <img src={SSPhimImg} alt="SSPhim img"></img>
          </div>
          <nav className="flex">
            {authState.user ? (
              <div
                className={`relative text-white font-bold ${classes.hoverAllButton} ${classes.fontSize}`}
              >
                <div
                  className={`flex items-center justify-between pt-2 pb-2 pl-3 pr-3  border-2 border-solid ${classes.width}`}
                  onClick={() => {
                    setShowNavUser(!showNavUser);
                  }}
                >
                  <div>{authState.user}</div>
                  <AiFillCaretDown className="ml-1" />
                </div>
                {showNavUser && (
                  <div className="absolute top-full bg-black z-50">
                    <NavUser onHandleClick={moveToFavoriteMovie}>
                      <div>Phim yêu thích</div>
                      <BiMovie></BiMovie>
                    </NavUser>
                    <NavUser onHandleClick={logout}>
                      <div>Đăng xuất</div>
                      <BiLogOut></BiLogOut>
                    </NavUser>
                  </div>
                )}
              </div>
            ) : (
              <>
                <LinkNav path="/login" addClass="bg-red-600 border-red-600">
                  Đăng Nhập
                </LinkNav>
                <LinkNav path="/register" addClass="border-white">
                  Đăng Ký
                </LinkNav>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
