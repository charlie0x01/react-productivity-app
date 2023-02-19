import React, { useState } from "react";
import "./PomodoroSettings.css";
import Stopwatch from "../Stopwatch/Stopwatch";

const PomodoroSettings = () => {
  const [minutes, setMinutes] = useState(0);
  const [breakTime, setBreakTime] = useState();
  const [sessions, setSessions] = useState();
  const [breaks, setBreaks] = useState();

  const getTime = () => {
    return ("0" + Math.floor(minutes)).slice(-2);
  }

  return (
    <div className="block timer-input-box">
      <div className="columns is-gapless is-mobile ">
        <div className="column is-5">
          <div className="is-flex-direction-row is-align-items-center p-1">
            <span className="mr-1">Focus Time</span>
            <input className="input is-small" type="number" value={minutes} onChange={(e) => {setMinutes(e.target.value)}} />
            <span className="mx-1">mins</span>
          </div>
          <div className="is-flex-direction-row is-align-items-center p-1">
            <span className="mr-1">Break Time</span>
            <input className="input is-small" defaultValue="00" type="number" value={breakTime} onChange={(e) => {setBreakTime(e.target.value)}}/>
            <span className="mx-1">mins</span>
          </div>
        </div>
        <div className="column is-3">
          <div className="is-flex-direction-row is-align-items-center p-1">
            <span className="mr-1">Sessions</span>
            <input className="input is-small" defaultValue="0" type="number" value={sessions} onChange={(e) => {setSessions(e.target.value)}} />
          </div>
          <div className="is-flex-direction-row is-align-items-center p-1">
            <span className="mr-4">Breaks</span>
            <input className="input is-small" defaultValue="0" type="number" value={breaks} onChange={(e) => {setBreaks(e.target.value)}} />
          </div>
        </div>
      </div>
      <span>{getTime()}</span>
    </div>
  );
};

export default PomodoroSettings;
