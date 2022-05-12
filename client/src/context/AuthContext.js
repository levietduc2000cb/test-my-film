//Quan ly tinh trang dang nhap dang ky cua trang web
import { createContext, useReducer, useEffect } from "react";
import * as actionType from "../reducers/actionType";
import AuthReducer from "../reducers/AuthReducer";
import { apiUrl, TOKEN_USER } from "./constants";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const AuthContent = createContext();

function AuthContentProvider(props) {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authLoading: false,
    error: false,
    isAuthenticated: false,
    notification: false,
    user: null,
  });

  //Authenticate User
  async function loadUser() {
    if (localStorage[TOKEN_USER]) {
      setAuthToken(localStorage[TOKEN_USER]);
      try {
        dispatch({ type: actionType.LOADING_AUTH });
        const response = await axios.get(`${apiUrl}/auth`);
        if (response.data.success) {
          dispatch({ type: actionType.SET_AUTH, user: response.data.user });
        }
      } catch (error) {
        localStorage.removeItem(TOKEN_USER);
        setAuthToken(null);
        dispatch({ type: actionType.RESET_AUTH });
      }
    } else {
      setAuthToken(null);
      dispatch({ type: actionType.RESET_AUTH });
    }
  }
  useEffect(() => {
    loadUser();
  }, []);
  //Login
  async function LoginUser(userForm) {
    try {
      dispatch({ type: actionType.LOADING_AUTH });
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem(TOKEN_USER, response.data.accessToken);
        dispatch({ type: actionType.LOGIN_AUTH, user: response.data.user });
      }
    } catch (error) {
      if (error.response.data) {
        dispatch({
          type: actionType.ERROR_AUTH,
          notification: error.response.data.message,
        });
      }
    }
  }
  //Register
  async function Register(userForm) {
    try {
      dispatch({ type: actionType.LOADING_AUTH });
      const response = await axios.post(`${apiUrl}/auth/register`, {
        ...userForm,
      });
      if (response.data.success) {
        localStorage.setItem("TOKEN_USER", response.data.accessToken);
        dispatch({
          type: actionType.REGISTER_AUTH,
          notification: response.data.message,
          user: response.data.user,
        });
      }
    } catch (error) {
      if (error.response.data) {
        dispatch({
          type: actionType.ERROR_AUTH,
          notification: error.response.data.message,
        });
      }
    }
  }
  // Reset User
  function ResetUser() {
    setAuthToken(null);
    dispatch({ type: actionType.RESET_AUTH });
  }
  function Logout() {
    setAuthToken(null);
    localStorage.removeItem(TOKEN_USER);
    dispatch({ type: actionType.RESET_AUTH });
  }
  const authContextData = { authState, LoginUser, Register, ResetUser, Logout };
  return (
    <AuthContent.Provider value={authContextData}>
      {props.children}
    </AuthContent.Provider>
  );
}
export default AuthContentProvider;
