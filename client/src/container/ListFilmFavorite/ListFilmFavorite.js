import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchDataMyFilm,
  changeStateDataMyFilm,
  deleteDataMyFilm,
} from "../../redux/FilmSlice";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilmFavorite from "../../components/FilmFavorite/FilmFavorite";

function ListFilmFavorite(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { myfilms } = useSelector((state) => state.FilmReducer);
  useEffect(() => {
    dispatch(fetchDataMyFilm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function movePageInformation(urlFilm) {
    navigate(`/detailFilm/${urlFilm}`);
  }
  function changeStateFilm(e, data, idFilm) {
    e.stopPropagation();
    const newState = {
      data,
      idFilm,
    };
    dispatch(changeStateDataMyFilm(newState));
  }
  function deleteFilm(e, idFilm) {
    e.stopPropagation();
    dispatch(deleteDataMyFilm(idFilm));
  }
  return (
    <Layout>
      <div className="bg-black">
        <div className="container m-auto pt-16 pb-16">
          <SearchBar />
        </div>
      </div>
      <div className="bg-black">
        <div className="container m-auto pt-10 pb-10 mt-1 mb-1 bg-gray-900">
          {myfilms.length > 0 ? (
            myfilms.map((myfilm, index) => {
              return (
                <FilmFavorite
                  key={myfilm._id}
                  id={myfilm._id}
                  title={myfilm.title}
                  description={myfilm.description}
                  ulrFilm={myfilm.ulrFilm}
                  urlImg={myfilm.urlImg}
                  status={myfilm.status}
                  onMovePageInformation={movePageInformation}
                  onChangeStateFilm={changeStateFilm}
                  onDeleteFilm={deleteFilm}
                ></FilmFavorite>
              );
            })
          ) : (
            <div className="pl-16 text-white text-2xl">
              Không có phim nào trong danh sách yêu thích của bạn
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
export default ListFilmFavorite;
