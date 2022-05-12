import classes from "./Actors.module.css";
import { useEffect, useState } from "react";
import Actor from "./Actor/Actor";
function Actors(props) {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch(
      `http://api.themoviedb.org/3/movie/${props.id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`
    )
      .then((res) => res.json())
      .then((data) => {
        setActors(data.cast.slice(0, 8));
      });
  }, [props.id]);
  return (
    <div className={`${classes.grid}`}>
      {actors.map((actor, index) => {
        return (
          <Actor
            key={index}
            imgPath={actor.profile_path}
            fullname={actor.name}
          ></Actor>
        );
      })}
    </div>
  );
}
export default Actors;
