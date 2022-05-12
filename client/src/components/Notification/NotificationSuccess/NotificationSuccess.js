import classes from "../Notification.module.css";
import Modal from "../../UI/Modal/Modal";
import { BiCheckCircle } from "react-icons/bi";
function NotificationSuccess(props) {
  return (
    <Modal>
      <div
        className={`bg-white pl-4 pr-4 pt-4 pb-4 m-5 rounded max-w-lg w-full ${classes.transitionNotification}`}
      >
        <div className="flex flex-col justify-center items-center pb-4">
          <div className="mt-2 mb-5">
            <BiCheckCircle className="text-6xl text-green-600"></BiCheckCircle>
          </div>
          <div className="text-lg text-center">{props.notification}</div>
        </div>
        <div className="flex justify-center items-center p-1">
          <button className="text-lg font-bold" onClick={props.onChangeSuccess}>
            Đồng ý
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default NotificationSuccess;
