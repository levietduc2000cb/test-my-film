import Spiner from "../UI/Spiner/Spiner";
function LoadingPage(props) {
  return (
    <div className="bg-black w-screen h-1/2 flex justify-center items-center">
      <Spiner width="w-16" height="h-16" />
    </div>
  );
}
export default LoadingPage;
