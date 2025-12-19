import react from "react";
import { CountdownTimer } from "./Timer";
import imgLeft from "../images/couple.jpg";
import imgCenter from "../images/image1.jpg";
import imgRight from "../images/image2.jpg";

export default function RSVP() {
  return (
    <div className="rsvp">
      <div className="rsvp-info">
        <div className="rsvp-content">
          <h1>RSVP</h1>
          <p>
            We're beyond excited to celebrate this special day with the people
            we care most.
          </p>
          <p>
            Please let us know if you'll be joining us by clicking the RSVP
            button on the side or sending us a message through our facebook
            account.
          </p>
          <p>
            Kindly RSVP by March 30, 2026. We can't wait to share a day full of
            love, laughter and unforgettable memories with you!
          </p>
        </div>
        <a
          href="https://forms.gle/fr1ctdndmXhJfGfY8"
          target="_blank"
          rel="noopener noreferrer"
          id="btnRsvp"
        >
          RSVP HERE
        </a>
      </div>
      <div className="envelope">
        <div className="top-envelope"></div>
        <div className="mid-container">
          <img className="imgLeft" src={imgLeft} />
          <img className="imgCenter" src={imgCenter} />
          <img className="imgRight" src={imgRight} />

          {/* <div className="image2"></div>
          <div className="image3"></div> */}
          <div className="right-envelope"></div>
          <div className="left-envelope"></div>
        </div>
      </div>
    </div>
  );
}
