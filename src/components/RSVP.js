import react from "react";
import { CountdownTimer } from "./Timer";

function RSVPEntry() {
  return (
    <div id="rsvpEntry">
      <h1>RSVP</h1>
      <section>
        <h2>TIMER HERE</h2>
      </section>
    </div>
  );
}
function RSVPInfo() {
  return (
    <div id="rsvpInfo">
      <h1>RSVP</h1>
      <p>
        We're beyond excited to celebrate this special day with the people we
        care most.
      </p>
      <p>
        Please let us know if you'll be joining us by clicking the RSVP button
        on the side or sending us a message through our facebook account.
      </p>
      <p>
        Kindly RSVP by <span>March 30, 2026.</span> We can't wait to share a day
        full of love, laughter and unforgettable memories with you!
      </p>
      <a
        href="https://forms.gle/fr1ctdndmXhJfGfY8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="btnRsvp">RSVP HERE</button>
      </a>
    </div>
  );
}

export default function RSVP() {
  return (
    <div className="rsvp-bg">
      <div className="rsvp">
        <div className="envelope">
          <div className="top-container">
            <div className="top-envelope"></div>
            <div className="rsvp-info">
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
              <a
                href="https://forms.gle/fr1ctdndmXhJfGfY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="btnRsvp">RSVP HERE</button>
              </a>
            </div>
          </div>
          <div className="mid-container">
            <div className="right-envelope"></div>
            <div className="left-envelope"></div>
            <div className="bottom-envelope"></div>
          </div>
          <div className="bottom-container"></div>
        </div>
      </div>
    </div>
  );
}
