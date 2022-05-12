import classes from "./IntroduceSectionLeft.module.css";
import { useEffect, useRef, useState } from "react";

function IntroduceSectionLeft(props) {
  const [show, setShow] = useState(false);
  const refSection = useRef();
  useEffect(() => {
    let bottom = refSection.current.getBoundingClientRect().bottom;
    let top = refSection.current.getBoundingClientRect().top;
    if (props.position > top && bottom >= 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [props.position]);
  return (
    <section className="bg-black" ref={refSection}>
      <div
        className={`container m-auto ${
          show ? classes.transitionLeftMove : classes.transitionLeft
        }`}
      >
        <div className="flex pt-24 pb-24 bg-black mt-1 mb-1">
          <div className="w-1/2 flex items-center justify-center">
            <div className="text-white w-2/3">
              <h1 className={`${props.fontTextTitle} font-bold text-left`}>
                {props.title}
              </h1>
              <p className={`${props.fontText} mt-6`}>{props.content}</p>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-1/2">
              <img
                className="block"
                src={props.imgUrl}
                alt="TV Img Introduce"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default IntroduceSectionLeft;
