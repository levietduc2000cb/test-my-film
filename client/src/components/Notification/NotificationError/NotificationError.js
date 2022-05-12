import classes from "../Notification.module.css";
import { BiErrorCircle } from "react-icons/bi";
import Modal from "../../UI/Modal/Modal";

function NotificationError(props) {
  return (
    <Modal>
      <div
        className={`bg-white pl-4 pr-4 pt-4 pb-4 m-5 rounded ${classes.transitionNotification}`}
      >
        <div className="flex flex-col justify-center items-center pb-4">
          <div className="mt-2 mb-5">
            <BiErrorCircle className="text-6xl text-red-600"></BiErrorCircle>
          </div>
          <div className="text-lg text-center">{props.notification}</div>
        </div>
        <div className="flex justify-center items-center p-1">
          <button className="text-lg font-bold" onClick={props.onChangeError}>
            Đồng ý
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default NotificationError;
