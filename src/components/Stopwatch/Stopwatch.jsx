import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);
  return (
    <div className="stopwatch">
      {time === 0 ? (
        <button onClick={() => setRunning(true)} className="">
          <i className="fa-solid fa-play"></i>
        </button>
      ) : (
        <div className="d-flex flex-row">
          {running === true ? (
            <button onClick={() => setRunning(false)} className="">
              <i className="fa-solid fa-pause"></i>
            </button>
          ) : (
            <button onClick={() => setRunning(true)} className="">
              <i className="fa-solid fa-play"></i>
            </button>
          )}

          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
            className="ms-1"
          >
            <i className="fa-solid fa-stop"></i>
          </button>
        </div>
      )}
      {time !== 0 ? (
        <div className="ms-2">
          {/* <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span> */}
          <span>{("0" + Math.floor(time / 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor(time)).slice(-2)}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stopwatch;
