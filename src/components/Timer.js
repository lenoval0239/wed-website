import React, { useEffect, useState } from "react";

const targetDate = new Date("May 23 2026");

//create a function that calculates the differences
export const CountdownTimer = () => {
  const calcTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now; // a time gap between two dates - in milliseconds
    //javascript gives that time difference in milliseconds
    //we need to convert it into days
    //% is the modulus - 7%3 gives us 1 = aka the remainder // give me the leftover after dividing
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); //1000 - 1 sec has 1000 milliseconds
    //1 minute has 60 seconds //1 hour has 60 minutes//1 day has 24 hours
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); //difference % (1000 * 60 * 60 * 24) - ignore the full days and just jkeep the leftover time
    //1000 * 60 * 60 - how many milliseconds are in 1 hour
    //Leftover time/milliseconds in 1 hour
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(timer); //clean up the intercal when compinent unmounts
  }, []);
  return (
    <section id="timer-section">
      <div id="mainImage">
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="0"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <div className="countdown">
        <section className="timers">
          <section className="timer">
            <h5>{timeLeft.days}</h5>
            <p>Days</p>
          </section>
          <section className="timer">
            <h5>{timeLeft.hours}</h5>
            <p>Hours</p>
          </section>
          <section className="timer">
            <h5>{timeLeft.minutes}</h5>
            <p>Minutes</p>
          </section>
          <section className="timer">
            <h5>{timeLeft.seconds}</h5>
            <p>Seconds</p>
          </section>
        </section>
        <h4>Left before we say "I do" </h4>
        {/* <h2>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</h2> */}
      </div>
    </section>
  );
};
