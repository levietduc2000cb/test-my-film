import classes from "./NavUser.module.css";

function NavUser(props) {
  return (
    <div
      onClick={props.onHandleClick}
      className={`flex items-center justify-between pt-2 pb-2 pl-3 pr-3 border-2 border-solid ${classes.width} ${classes.hoverButton}`}
    >
      {props.children}
    </div>
  );
}
export default NavUser;
