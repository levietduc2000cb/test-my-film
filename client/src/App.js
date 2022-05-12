import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import Introduce from "./container/Introduce/Introduce";
import Home from "./container/Home/Home";
import Information from "./container/Information/Information";
import SearchFilm from "./container/SearchFilm/SearchFilm";
import ListFilmFavorite from "./container/ListFilmFavorite/ListFilmFavorite";
import AuthContentProvider from "./context/AuthContext";
import NotFound from "./container/NotFound/NotFound";
import { Provider } from "react-redux";
import storeFilm from "./redux/FilmStore";
import "./App.css";

function App() {
  return (
    <AuthContentProvider>
      <Provider store={storeFilm}>
        <Routes>
          <Route path="/" element={<Introduce></Introduce>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="home/myFavoriteFilm"
            element={
              <ProtectedRoutes>
                <ListFilmFavorite />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/detailFilm/:idFilm"
            element={
              <ProtectedRoutes>
                <Information />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/search/:searchFilm"
            element={
              <ProtectedRoutes>
                <SearchFilm />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home></Home>
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Provider>
    </AuthContentProvider>
  );
}

export default App;
