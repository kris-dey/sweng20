import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <p>
        <Chart
          label={["0:00", "0:01", "0:02", "0:03", "0:04", "0:05"]}
          hData={[
            { x: 0, y: 80 },
            { x: 10, y: 71 },
            { x: 20, y: 42 },
            { x: 30, y: 40 },
            { x: 40, y: 29 },
            { x: 50, y: 21 }
          ]}
          bData={[
            { x: 0, y: 85 },
            { x: 10, y: 83 },
            { x: 20, y: 70 },
            { x: 30, y: 55 },
            { x: 40, y: 42 },
            { x: 50, y: 35 }
          ]}
          cData={[
            { x: 0, y: 100 },
            { x: 10, y: 100 },
            { x: 20, y: 100 },
            { x: 30, y: 100 },
            { x: 40, y: 100 },
            { x: 50, y: 100 }
          ]}
        />
      </p>
    </div>
  );
}

export default App;
