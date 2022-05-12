import * as actionType from "./actionType";

function AuthReducer(preState, action) {
  switch (action.type) {
    case actionType.LOADING_AUTH:
      return { ...preState, authLoading: true };
    case actionType.SET_AUTH:
      return {
        ...preState,
        authLoading: false,
        notification: true,
        isAuthenticated: true,
        user: action.user,
      };
    case actionType.LOGIN_AUTH:
      return {
        ...preState,
        authLoading: false,
        notification: true,
        user: action.user,
      };
    case actionType.REGISTER_AUTH:
      console.log("REGISTER_AUTH");
      return {
        ...preState,
        authLoading: false,
        user: action.user,
        notification: action.notification,
      };
    case actionType.ERROR_AUTH:
      return {
        ...preState,
        authLoading: false,
        isAuthenticated: false,
        notification: action.notification,
        error: true,
      };
    case actionType.RESET_AUTH:
      return {
        authLoading: false,
        error: false,
        isAuthenticated: false,
        user: null,
      };
    default:
      return { ...preState };
  }
}
export default AuthReducer;
