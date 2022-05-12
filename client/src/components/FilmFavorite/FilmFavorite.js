import classes from "./FilmFavorite.module.css";

function FilmFavorite(props) {
  function setState(e, currentState) {
    let newData = {
      title: props.title,
      description: props.description,
      ulrFilm: props.ulrFilm,
      urlImg: props.urlImg,
      status: currentState,
    };
    switch (currentState) {
      case "CHƯA XEM":
        newData.status = "ĐANG XEM";
        break;
      case "ĐANG XEM":
        newData.status = "ĐÃ XEM";
        break;
      case "ĐÃ XEM":
        newData.status = "CHƯA XEM";
        break;
      default:
        break;
    }
    props.onChangeStateFilm(e, newData, props.id);
  }
  function setColor(state) {
    switch (state) {
      case "CHƯA XEM":
        return classes.stateRed;
      case "ĐANG XEM":
        return classes.stateBlue;
      case "ĐÃ XEM":
        return classes.stateGreen;
      default:
        break;
    }
  }
  return (
    <div
      onClick={() => {
        props.onMovePageInformation(props.ulrFilm);
      }}
      className={`flex pt-4 pb-4 sm:pl-4 sm:pr-4 ${classes.paddingMobile} items-center justify-between ${classes.filmfavoriteHover}`}
    >
      <div className="flex flex-1 items-center ml-10">
        <div className={`${classes.sizeImg} sm:w-11/12 md:w-6/12 lg:w-2/12`}>
          <img
            className="w-full rounded-lg"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.urlImg}`}
            alt="img background"
          ></img>
        </div>
        <div className="text-white ml-6">
          <h1
            className={`font-bold lg:text-3xl sm:max-w-2xl mb-6 ${classes.maxWidth} ${classes.fontSizeTitle}`}
          >
            {props.title}
          </h1>
          <p
            className={`lg:text-xl max-w-4xl ${classes.fontSizeDescription} ${classes.hiddenMobile}`}
          >
            {props.description}
          </p>
        </div>
      </div>
      <div
        className={`text-white flex flex-col lg:text-xl ${classes.fontSizeButton} w-2/12 mr-10`}
      >
        <button
          onClick={(e) => {
            setState(e, props.status);
          }}
          className={`m-3 pt-4 pb-4 ${setColor(
            props.status
          )} rounded-lg w-full`}
        >
          {props.status}
        </button>
        <button
          onClick={(e) => {
            props.onDeleteFilm(e, props.id);
          }}
          className={`m-3 pt-4 pb-4 bg-red-600 rounded-lg w-full ${classes.deleteButtonHover}`}
        >
          XÓA
        </button>
      </div>
    </div>
  );
}
export default FilmFavorite;
