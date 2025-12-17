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

  return (
    <section id="details">
      <section className="title">
        <h1 ref={ref} className={`typing ${isVisible ? "animate" : ""}`}>
          Wedding Details
        </h1>
        {/* <h3>Please only attend what your invitation entales</h3> */}
      </section>
      <section className="accomodation">
        <h1>Accomodation</h1>
        <p>
          Thank you for making the journey to join us on our special day! We’ve
          arranged a block of rooms at The Cobble Creek Lodge in Maple Creek. Be
          sure to mention the Noval–Scott wedding when making your reservation.
        </p>
        <h5>Please book your rooms by March 30, 2026</h5>
        <div className="hotel-info-wrapper">
          <div className="hotel-name-wrapper">
            <h3 className="hotel-name">The Cobble Creek Lodge</h3>
          </div>
          <div className="hotel-info">
            <section>
              <h4>ADDRESS</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=201+SK-21,+Maple+Creek,+SK+S0N+1N0"
                target="_blank"
                rel="noopener noreferrer"
              >
                201 SK-21, Maple Creek, SK S0N 1N0
              </a>
            </section>
            <section>
              <h4>PHONE</h4>
              <a href="tel:+13066625100">(306) 662-5100</a>
            </section>
            <section>
              <h4>EMAIL</h4>
              <a href="mailto:reservations@cobblecreeklodge.com">
                reservations@cobblecreeklodge.com
              </a>
            </section>
            <section>
              <h4>WEBSITE</h4>
              <a
                href="https://cobblecreeklodge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://cobblecreeklodge.com/
              </a>
            </section>
          </div>
        </div>
      </section>
      <section className="schedule-container">
        <div className="schedule-content">
          <div className="schedule-header">
            <h2>The Schedule</h2>
            <p>Our Ceremony, Reception and Dance will be held at the</p>
            <p> Maple Creek Armories, 502 Marsh St</p>
          </div>
          <div className="schedule-info">
            <section className="ceremony">
              <h3>The Ceremony</h3>
              <p>
                Please join us as we exchange our vows and say our “I dos.” at
                2PM.
              </p>
            </section>
            <section className="supper">
              <h3>The Reception</h3>
              <p>
                We are having our family-only supper at 6PM. We’re sorry we
                couldn’t invite everyone, and we truly appreciate your
                understanding.
              </p>
            </section>
            <section className="dance">
              <h3>The Dance</h3>
              <p>
                The dance will begin at 8:00 PM (cash bar available). Midnight
                snacks will be provided to keep the celebration going.
              </p>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Details;
