import React from "react";
import leftImage from "../images/registry-leftimg.png";
import rightImage from "../images/registry-rightimg.png";
import gift from "../images/registry-gift.png";

function Registry() {
  return (
    <section id="registry">
      <img className="right-img1" src={rightImage} />
      <img className="right-img2" src={rightImage} />
      <img className="left-img" src={leftImage} />
      <img className="gift-img" src={gift} />

      <section>
        <h2>REGISTRY</h2>
        <div className="content">
          <h3>Your presence is truly the best gift we could ask for.</h3>
          <p>
            But if you feel called to give a little something, we’ve put
            together a small registry with some of our most wished-for items on
            Amazon.
          </p>
          <p>Thank you for being part of this milestone with us.</p>
          <a
            href="https://www.amazon.ca/wedding/registry/306U07WU0EU9N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to Registry</button>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Registry;
