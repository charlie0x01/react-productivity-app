import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [stopped, setStopped] = useState(true);


  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        if (time === 59) {
          setTime(0);
          setMinutes(minutes + 1);
        }
        if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);
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
            <button onClick={() => setRunning(false)} className="button is-small">
              <i className="fa-solid fa-pause"></i>
            </button>
          ) : (
            <button onClick={() => setRunning(true)} className="button is-small">
              <i className="fa-solid fa-play"></i>
            </button>
          )}

          <button
            onClick={() => {
              setRunning(false);
              setStopped(true);
              setHours(0);
              setMinutes(0);
              setTime(0);
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
            <span>{("0" + Math.floor(time)).slice(-2) + "s"}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stopwatch;
