import { AiFillStar } from "react-icons/ai";
function Star(props) {
  if (props.vote === 10) {
    return (
      <>
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
      </>
    );
  } else if (props.vote >= 8) {
    return (
      <>
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
      </>
    );
  } else if (props.vote >= 6) {
    return (
      <>
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
      </>
    );
  } else if (props.vote >= 4) {
    return (
      <>
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
      </>
    );
  } else if (props.vote >= 2) {
    return (
      <>
        <AiFillStar className="text-yellow-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
      </>
    );
  } else {
    return (
      <>
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
        <AiFillStar className="text-gray-600 text-xl" />
      </>
    );
  }
}
export default Star;
