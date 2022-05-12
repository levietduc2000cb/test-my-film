import classes from "./Carousel.module.css";
import backGroundAvengers from "../../assets/Avengers.jpg";
import backGroundSpiderMan from "../../assets/SpiderMan.jpg";
import backGroundBlackPanther from "../../assets/BlackPanther.png";

function Carousel(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden rounded">
        <div className="carousel-item active float-left w-full bg-black">
          <div className="w-full flex justify-center items-center">
            <img
              src={backGroundAvengers}
              className={`block w-full ${classes.height}`}
              alt="Wild Landscape"
            />
          </div>
        </div>
        <div className="carousel-item float-left w-full bg-black">
          <div className="w-full flex justify-center items-center">
            <img
              src={backGroundSpiderMan}
              className={`block w-full ${classes.height}`}
              alt="Wild Landscape"
            />
          </div>
        </div>
        <div className="carousel-item float-left w-full">
          <div className="w-full flex justify-center items-center">
            <img
              src={backGroundBlackPanther}
              className={`block w-full ${classes.height}`}
              alt="Wild Landscape"
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
