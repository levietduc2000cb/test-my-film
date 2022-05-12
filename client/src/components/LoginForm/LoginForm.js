import { useState, useContext } from "react";
import { AuthContent } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Input from "../UI/Input/Input";
import Spiner from "../UI/Spiner/Spiner";
function LoginForm(props) {
  const [inputFormLogin, setInputFormLogin] = useState({
    username: "",
    password: "",
  });
  const { authState } = useContext(AuthContent);
  function getInputForm(tagName, input) {
    setInputFormLogin((preState) => {
      return { ...preState, [tagName]: input };
    });
  }
  return (
    <form
      onSubmit={(e) => {
        props.onLogin(e, inputFormLogin);
      }}
    >
      <div className="mb-4">
        <Input
          typeInput={"text"}
          placeholderInput={"Username"}
          nameInput={"username"}
          valueInput={inputFormLogin.username}
          onInputForm={getInputForm}
        ></Input>
      </div>
      <div className="mb-4">
        <Input
          typeInput={"password"}
          placeholderInput={"Password"}
          nameInput={"password"}
          valueInput={inputFormLogin.password}
          onInputForm={getInputForm}
        ></Input>
      </div>
      <div className="text-center pt-1 mb-12 pb-1">
        <button
          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          Đăng nhập
        </button>
      </div>
      {authState.authLoading ? (
        <div className="flex items-center justify-center">
          <Spiner width="w-8" height="h-8" />
        </div>
      ) : null}
      <div className="flex items-center justify-between pb-6">
        <p className="mb-0 mr-2 text-white">Bạn chưa có tài khoản?</p>
        <Link to={"/register"}>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Đăng Ký
          </button>
        </Link>
      </div>
    </form>
  );
}
export default LoginForm;
