import floral from "../images/flower1.png";
import flower2 from "../images/flower2.png";

import cheers from "../images/cheers.gif";
import { useEffect, useRef, useState } from "react";

function Details() {
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
      { threshold: 0 } //threshold: 0.1: animation will trigger when 50% of the element is visible.
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

  // ref={ref}
  // className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
  return (
    <section id="details">
      <section className="title">
        <h1 ref={ref} className={`typing ${isVisible ? "animate" : ""}`}>
          Wedding Details
        </h1>
        <h3>Please only attend what your invitation entales</h3>
      </section>
      <section className="accomodation">
        <h1>Accomodation</h1>
        <p>
          We've reserved a block of rooms at The Cobble Creek Lodge in Maple
          Creek. Just mention the Noval–Scott wedding when you reserve.
        </p>
        <h5>
          Please book your rooms by<span>March 30, 2026</span>
        </h5>
        <div className="hotel-info-wrapper">
          <div className="hotel-name-wrapper">
            <h3 className="hotel-name">The Cobble Creek Lodge</h3>
          </div>
          <section className="hotel-info">
            <section>
              <h4>Address</h4>
              <p>201 SK-21, Maple Creek, SK S0N 1N0</p>
            </section>
            <section>
              <h4>Phone</h4>
              <p>(306) 662-5100</p>
            </section>
            <section>
              <h4>Website</h4>
              <p>reservations@cobblecreeklodge.com</p>
            </section>
            <section>
              <a
                href="https://cobblecreeklodge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bookOnline">Book Online</button>
              </a>
            </section>
          </section>
        </div>
      </section>
      <section className="cards">
        {/* <div className="accomodation">
          <h1>Accomodation</h1>
          <h3>The Cobble Creek Lodge</h3>
          <h5>
            We've reserved a block of rooms at The Cobble Creek Lodge in Maple
            Creek. Just mention the Noval–Scott wedding when you reserve.
          </h5>
          <h5>
            Please book your rooms by<span>March 30, 2026</span>
          </h5>
          <p>
            201 SK-21, Maple Creek, SK S0N 1N0 (306) 662-5100
            reservations@cobblecreeklodge.com
          </p>

          <a
            href="https://cobblecreeklodge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bookOnline">Book Online</button>
          </a>
        </div> */}
        <div className="card1"></div>
        <div className="card2">
          <h2>Schedule</h2>
          <h4>We do</h4>
          <p>2:00pm</p>
          <h4>We Dine</h4>
          <p>5:30pm</p>
          <h4>We Dance</h4>
          <p>8:00pm</p>

          <p className="address">
            Everything will be held at the Maple Creek Armories, 502 Marsh St,
            Maple Creek
          </p>
        </div>

        <div className="images">
          <img
            ref={ref}
            className={`flower ${isVisible ? "animate" : ""}`}
            src={floral}
          />
          <img
            ref={ref}
            className={`flower2 ${isVisible ? "animate" : ""}`}
            src={flower2}
          />
        </div>
      </section>
    </section>
  );
}

export default Details;
