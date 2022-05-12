import classes from "./NewMovie.module.css";
function NewMovie(props) {
  return (
    <div className={`mt-4 ${classes.hoverFilm}`}>
      <div className="rounded pt-10 pl-5 pr-5">
        <div className="relative">
          <img
            className="w-full object-contain rounded-lg"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.pathImg}`}
            alt="img-film"
          ></img>
          <div className="absolute top-0 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-yellow-400 text-white font-bold z-20 text-lg p-2 rounded-full">
            {Number.parseFloat(props.vote).toFixed(1)}
          </div>
        </div>
      </div>
      <div
        className={`text-white font-bold text-2xl mt-2 text-center pl-3 pr-3 ${classes.fontSize}`}
      >
        {`${props.title} (${props.releaseDate})`}
      </div>
    </div>
  );
}
export default NewMovie;
