import react from "react";
import { CountdownTimer } from "./Timer";

export default function RSVP() {
  return (
    <div className="rsvp">
      <div className="envelope">
        <div className="top-container">
          <div className="top-envelope"></div>
          <div className="rsvp-info">
            <div className="rsvp-content">
              <h1>RSVP</h1>
              <p>
                We're beyond excited to celebrate this special day with the
                people we care most.
              </p>
              <p>
                Please let us know if you'll be joining us by clicking the RSVP
                button on the side or sending us a message through our facebook
                account.
              </p>
              <p>
                Kindly RSVP by March 30, 2026. We can't wait to share a day full
                of love, laughter and unforgettable memories with you!
              </p>
            </div>
          </div>
        </div>
        <div className="mid-container">
          <div className="right-envelope"></div>
          <div className="left-envelope"></div>
          <div className="bottom-envelope">
            <button
              id="btnRsvp"
              onClick={() =>
                window.open(
                  "https://forms.gle/fr1ctdndmXhJfGfY8",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              RSVP HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
