export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://aqueous-woodland-90881.herokuapp.com/api";
export const TOKEN_USER = "TOKEN_USER";
