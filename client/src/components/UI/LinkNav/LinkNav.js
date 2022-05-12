import classes from "./LinkNav.module.css";
import { Link } from "react-router-dom";
function LinkNav(props) {
  return (
    <Link
      to={props.path}
      className={`${classes.fontText} mt-2 mr-2 pt-1 pb-1 pl-2 pr-2 text-white font-bold border-2 border-solid rounded ${props.addClass}`}
    >
      {props.children}
    </Link>
  );
}
export default LinkNav;
