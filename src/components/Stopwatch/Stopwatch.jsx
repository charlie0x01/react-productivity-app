import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "./Stopwatch.css";

import bellSound from "../../assets/sounds/achive.mp3";

const Stopwatch = ({ endTime = { seconds: 0, minutes: 0, hours: 0 }, startTime = {seconds: 0, minutes: 0, hours: 0} }) => {
  // time states
  const [seconds, setSeconds] = useState(startTime.seconds);
  const [minutes, setMinutes] = useState(startTime.minutes);
  const [hours, setHours] = useState(startTime.hours);
  // pause and stop states
  const [running, setRunning] = useState(false);
  const [stopped, setStopped] = useState(true);
  // time up sound
  const [TimeUp] = useSound(
    bellSound,
    { volume: 0.80 }
  );

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);

      // stop timer on endTime if endTime is given
      if (endTime !== { seconds: 0, minutes: 0, hours: 0 }) {
        if (
          seconds === endTime.seconds &&
          minutes === endTime.minutes &&
          hours === endTime.hours
        )
        {
          TimeUp();
          setStopped(true);
          setRunning(false);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          return clearInterval(interval);
        }
      }
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);
  return (
    <div className="stopwatch">
      {stopped === true ? (
        <button
          onClick={() => {
            setRunning(true);
            setStopped(false);
          }}
          className="button is-small"
        >
          <i className="fa-solid fa-play"></i>
        </button>
      ) : (
        <div className="">
          {running === true ? (
            <button
              onClick={() => setRunning(false)}
              className="button is-small"
            >
              <i className="fa-solid fa-pause"></i>
            </button>
          ) : (
            <button
              onClick={() => setRunning(true)}
              className="button is-small"
            >
              <i className="fa-solid fa-play"></i>
            </button>
          )}

          <button
            onClick={() => {
              setRunning(false);
              setStopped(true);
              setHours(0);
              setMinutes(0);
              setSeconds(0);
            }}
            className="ms-1 button is-small"
          >
            <i className="fa-solid fa-stop"></i>
          </button>
        </div>
      )}

      {stopped === false ? (
        <div className="timer">
          {hours > 0 ? (
            <span>{("0" + Math.floor(hours)).slice(-2)}:</span>
          ) : (
            <></>
          )}
          {minutes > 0 ? (
            <span>{("0" + Math.floor(minutes)).slice(-2)}:</span>
          ) : (
            <></>
          )}
          <span>{("0" + Math.floor(seconds)).slice(-2) + "s"}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stopwatch;
