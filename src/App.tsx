import React, { useRef, useEffect, useState } from "react";
import * as d3s from "d3";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef<any>();

  useEffect(() => {
    const svg = d3s.select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (val) => val + 2)
      .attr("cy", (val) => val + 2)
      .attr("stroke", "red");
  }, [data]);
  const HandleTimer = () => {
    setTimeout(() => {
      setData(data.map((res) => res + 10));
      console.log("TIME");
    }, 500);
  };
  return (
    <div style={{ height: "80vh", backgroundColor: "purple" }}>
      <svg ref={svgRef} style={{ height: "100%", width: "100%" }}></svg>
      <br />
      <button onClick={() => setData(data.map((res) => res + 5))}>
        update
      </button>

      <button onClick={() => HandleTimer()}>add size after 1 sec</button>
    </div>
  );
}

export default App;
