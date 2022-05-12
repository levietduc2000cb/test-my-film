import classes from "./TopMovie.module.css";

function TopMovie(props) {
  return (
    <div className={`flex m-10 ${classes.hoverFilm}`}>
      <div className={`${classes.withImg}`}>
        <div className="relative">
          <img
            className="object-cover rounded-lg"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.pathImg}`}
            alt="img top film"
          ></img>
          <div className="absolute top-0 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-yellow-400 text-white font-bold z-50 text-xs p-1 rounded-full">
            {props.vote}
          </div>
        </div>
      </div>
      <div className="flex items-center ml-2">
        <div>
          <p
            className={`${classes.titleText} text-white text-left font-bold text-base`}
          >
            {`${props.title} (${props.releaseDate})`}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TopMovie;
