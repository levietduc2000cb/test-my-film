import classes from "./NewListMovie.module.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import LinkFilm from "../UI/LInkFilm/LinkFilm";
import NewMovie from "./NewMovie/NewMovie";

function NewListMovie(props) {
  const [newFilms, setNewFilms] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.pathData}?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setNewFilms(data.results));
    return () => {
      setNewFilms([]);
    };
  }, [props.pathData]);
  return (
    <>
      {newFilms.length > 0 ? (
        <div>
          <div
            className={`text-white text-5xl font-bold mb-12 uppercase mt-8 ${classes.fontTitle}`}
          >
            {props.titleName}
          </div>
          <div
            className={`grid ${classes.gridDisplay} lg:grid-cols-5 md:grid-cols-3 gap-1`}
          >
            {newFilms.map((newFilm) => {
              return (
                <LinkFilm key={newFilm.id} id={newFilm.id}>
                  <NewMovie
                    title={newFilm.title}
                    pathImg={newFilm.poster_path}
                    vote={newFilm.vote_average}
                    releaseDate={newFilm.release_date.slice(0, 4)}
                  ></NewMovie>
                </LinkFilm>
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingPage></LoadingPage>
      )}
    </>
  );
}
export default NewListMovie;
