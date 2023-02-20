import React from "react";
import Stopwatch from "./components/Stopwatch/Stopwatch";
// import Stopwatch from "./components/Stopwatch/Stopwatch";
import "./index.css";

function App() {
  return (
    <>
    <div className="box is-flex is-justify-content-center">
      <Stopwatch endTime={{ seconds: 9, minutes: 0, hours: 0}} startTime={{seconds: 5, minutes: 0, hours: 0}}/>
    </div>
    </>
  );
}

export default App;
