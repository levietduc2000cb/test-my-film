import Modal from "../UI/Modal/Modal";
import Spiner from "../UI/Spiner/Spiner";
function LoadingModal(props) {
  return (
    <Modal>
      <Spiner width={"w-1/6"} height={"h-1/6"} />
    </Modal>
  );
}
export default LoadingModal;
