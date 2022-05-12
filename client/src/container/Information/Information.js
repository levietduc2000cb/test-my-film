import classes from "./Information.module.css";
import MovieTrailer from "../../components/MovieTrailer/MovieTrailer";
import { BsStopwatch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Actors from "../../components/Actors/Actors";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import Star from "../../components/Star/Star";
import { useDispatch, useSelector } from "react-redux";
import { addDataMyFilm, resetFilm } from "../../redux/FilmSlice";
import NotificationSuccess from "../../components/Notification/NotificationSuccess/NotificationSuccess";
import LoadingModal from "../../components/LoadingModal/LoadingModal";

function Information(props) {
  const dispatch = useDispatch();
  const stateListFim = useSelector((state) => state.FilmReducer);
  const { createSuccess, messenger, loading } = stateListFim;
  const params = useParams();
  let idFilm = params.idFilm.toString();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, [idFilm]);
  function handleAddFilm() {
    const dataNewFilm = {
      title: film.title,
      description: film.overview,
      ulrFilm: film.id,
      urlImg: film.poster_path,
      status: "CHƯA XEM",
    };
    dispatch(addDataMyFilm(dataNewFilm));
  }
  function onChangeSuccess() {
    dispatch(resetFilm());
  }
  return (
    <Layout>
      <div className="bg-black">
        <div className="container m-auto pt-16 pb-16">
          <SearchBar />
        </div>
      </div>
      {!film ? (
        <LoadingPage />
      ) : (
        <div className="bg-black mt-1 mb-1">
          <div className="container m-auto pb-12">
            <section className="pl-6 pr-6">
              <div className="w-full relative flex justify-center items-center">
                <img
                  className={`block ${classes.height} md:h-screen lg:w-4/12`}
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.backdrop_path}`}
                  alt="img background"
                ></img>
                <div
                  className={`absolute ${classes.backGroundColor} top-0 left-0 right-0 bottom-0`}
                >
                  <div
                    className={`h-full flex ${classes.flexDirection} items-center justify-center`}
                  >
                    <div>
                      <img
                        className="rounded-md"
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
                        alt="img poster"
                      ></img>
                    </div>
                    <div
                      className={`${classes.ml} md:p-4 lg:p-16 md:ml-10 lg:ml-28 lg:max-w-2xl`}
                    >
                      <h1
                        className={`${classes.fontSizeTitle} text-white  font-bold`}
                      >
                        {film.title}
                      </h1>
                      <div>
                        <div className="flex mt-2 mb-2">
                          <Star vote={film.vote_average} />
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl text-left mt-2 mb-2`}
                        >
                          <span className="font-bold">Thể loại: </span>
                          {film.genres.map((genre) => {
                            return (
                              <span key={genre.id}>{`${genre.name} `}</span>
                            );
                          })}
                        </div>
                        <div
                          className={`${classes.fontSize} text-white flex items-center text-xl mt-2 mb-2`}
                        >
                          <BsStopwatch />
                          <div className="ml-1">{film.release_date}</div>
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-4 mb-4`}
                        >
                          <button
                            className="bg-blue-500 p-3 font-bold rounded-md"
                            onClick={handleAddFilm}
                          >
                            Thêm vào danh sách
                          </button>
                          <button className="bg-red-500 p-3 font-bold rounded-md ml-3">
                            Xem phim
                          </button>
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Sản xuất: </span>
                          {film.production_companies.map((production) => {
                            return (
                              <span
                                key={production.id}
                              >{`${production.name}, `}</span>
                            );
                          })}
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Quốc gia: </span>
                          {film.production_countries.map((country, index) => {
                            return (
                              <span key={index}>{`${country.name}, `}</span>
                            );
                          })}
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Năm: </span>
                          <span>{film.release_date.slice(0, 4)}</span>
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Thời lượng: </span>
                          <span>{`${film.runtime} phút`}</span>
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Chất lượng: </span>
                          <span>FullHD</span>
                        </div>
                        <div
                          className={`${classes.fontSize} text-white text-xl mt-2 mb-2`}
                        >
                          <span>Ngôn ngữ: </span>
                          <span>{film.original_language}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="text-white pl-6 pr-6 max-w-5xl w-full">
                <h1
                  className={`${classes.fontSizeTitle} text-4xl font-bold mt-16 mb-16`}
                >
                  Diễn Viên
                </h1>
                <div>
                  <Actors id={film.id}></Actors>
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="text-white pl-6 pr-6 max-w-5xl w-full">
                <h1
                  className={`${classes.fontSizeTitle} text-4xl font-bold mt-16 mb-16`}
                >
                  Nội Dung Phim
                </h1>
                <div className={`${classes.fontSize} text-xl`}>
                  <span className="font-bold">{`${film.title}: `}</span>
                  <span>{film.overview}</span>
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="text-white pl-6 pr-6 max-w-5xl w-full">
                <h1
                  className={`${classes.fontSizeTitle} text-4xl font-bold mt-16 mb-16`}
                >
                  Trailer Chính Thức
                </h1>
                <div className="flex justify-center">
                  <MovieTrailer videos={film.videos} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {loading && <LoadingModal />}
      {createSuccess && (
        <NotificationSuccess
          notification={messenger}
          onChangeSuccess={onChangeSuccess}
        />
      )}
    </Layout>
  );
}
export default Information;
