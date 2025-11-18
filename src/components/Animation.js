import centerPic from "../images/centerPic.jpg";

const { useRef, useState, useEffect } = require("react");

const ScrollAnimation = () => {
  const ref = useRef(); //will point to the div that we want to animate

  const [isVisible, setIsVisible] = useState(false);

  //this runs after the component mounts (loads) -- this is whhere the sroll-watching happens
  //IntersectionObserver is a browser feature that watches if an element is in the viewport.
  //([entry]) => {...}: a function that runs when visibility changes.

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); //entry.isIntersecting: true if the element is visible
      },
      { threshold: 0.5 } //threshold: 0.1: animation will trigger when 50% of the element is visible.
    );

    if (ref.current) {
      //If the ref is set, start observing the element (watch for scroll-in).
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); //The empty array means this effect runs only once (when the component loads).
  return (
    //ref={ref} attaches the scroll watcher to this <div>.
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div id="imagePage">
        <img className="imgLeft" src={centerPic} />
        <img className="imgCenter" src={centerPic} />
        <img className="imgRight" src={centerPic} />
      </div>
    </div>
  );
};

export default ScrollAnimation;
