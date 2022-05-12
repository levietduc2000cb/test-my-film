import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 w-screen h-screen ${classes.backGroundColor} flex items-center justify-center`}
    >
      {props.children}
    </div>
  );
}
export default Modal;
