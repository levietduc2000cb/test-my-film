import { useEffect, useState } from "react";
import TopMovie from "./TopMovie/TopMovie";
import LinkFilm from "../UI/LInkFilm/LinkFilm";

function TopListMovie(props) {
  const [topFilms, setTopFilms] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setTopFilms(data.results));
    return () => {
      setTopFilms([]);
    };
  }, []);
  return (
    <>
      <div className="text-white text-3xl font-bold uppercase mt-10 mb-12">
        Phim Hot
      </div>
      <div className="flex flex-col">
        {topFilms.map((topFilm) => {
          return (
            <LinkFilm key={topFilm.id} id={topFilm.id}>
              <TopMovie
                key={topFilm.id}
                title={topFilm.title}
                pathImg={topFilm.poster_path}
                vote={topFilm.vote_average}
                releaseDate={topFilm.release_date.slice(0, 4)}
              ></TopMovie>
            </LinkFilm>
          );
        })}
      </div>
    </>
  );
}
export default TopListMovie;
