import classes from "./MovieTrailer.module.css";
import ReactPlayer from "react-player";
function MovieTrailer(props) {
  let videoTrailer = props.videos.results.findIndex((video) => {
    return video.name.search("Official Trailer") >= 0;
  });
  //const videoURL = "https://www.youtube.com/watch?v=G5kzUpWAusI";
  return (
    <>
      {videoTrailer >= 0 ? (
        <div className="w-screen">
          <ReactPlayer
            width="100%"
            url={`https://www.youtube.com/watch?v=${props.videos.results[videoTrailer].key}`}
            controls={true}
          ></ReactPlayer>
        </div>
      ) : (
        <div className={`${classes.fontSize} text-xl`}>
          Không có trailer chính thức
        </div>
      )}
    </>
  );
}
export default MovieTrailer;
