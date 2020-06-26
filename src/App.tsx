import React, { useRef, useEffect, useState } from "react";
import * as d3s from "d3";

const Data = [
  { id: 1, f: 50.1 },
  { id: 2, f: 100.009 },
  { id: 3, f: 10.509 },
  { id: 4, f: 20.009 },
  { id: 5, f: 200.509 },
  { id: 6, f: 300.509 },
  { id: 7, f: 400.009 },
  { id: 8, f: 40.509 },
  { id: 9, f: 500.009 },
  { id: 10, f: 500.509 },
];
function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 10, 75]);
  const svgRef = useRef<any>();

  useEffect(() => {
    const svg = d3s.select(svgRef.current);
    const lines = d3s
      .line<any>()
      .x((val, index) => index * 50)
      .y((val) => 150 - val);
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("r", (val) => val)
    //   .attr("cx", (val) => val + 10)
    //   .attr("cy", (val) => val + 10)
    //   .attr("stroke", "red");
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (val) => lines(val))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  const HandleTimer = () => {
    setTimeout(() => {
      setData([...data, Math.floor(Math.random() * 100)]);
      // setData(data.push(300));
      console.log([...data]);
    }, 500);
  };
  return (
    <div style={{ height: "80vh", backgroundColor: "powderBlue" }}>
      <svg
        ref={svgRef}
        style={{ height: "50rem", width: "50rem", backgroundColor: "#e5e5e5" }}
      ></svg>
      <br />
      {/* <button onClick={() => setData(data.push(32))}>
        update
      </button> */}

      <button onClick={() => HandleTimer()}>add size after 1 sec</button>
    </div>
  );
}

export default App;
