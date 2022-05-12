import { Link } from "react-router-dom";
function LinkFilm(props) {
  return <Link to={`/detailFilm/${props.id}`}>{props.children}</Link>;
}
export default LinkFilm;
