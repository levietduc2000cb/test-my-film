export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "somethingUrlNetwork";
export const TOKEN_USER = "TOKEN_USER";
