import React, { useRef, useEffect, useState } from "react";
import * as d3s from "d3";

const Data = [
  { id: 1, f: 5.1 },
  { id: 2, f: 10.009 },
  { id: 3, f: 10.509 },
  { id: 4, f: 20.009 },
  { id: 5, f: 20.509 },
  { id: 6, f: 3.509 },
  { id: 7, f: 4.009 },
  { id: 8, f: 4.509 },
  { id: 9, f: 5.009 },
  { id: 10, f: 50.509 },
];
function App() {
  const [data, setData] = useState(Data);
  const svgRef = useRef<any>();

  useEffect(() => {
    const svg = d3s.select(svgRef.current);

    const xScale = d3s
      .scaleUtc()
      .domain([0, data.length - 1]) // data value range
      .range([0, 300]); //range of graph size

    // const yScale = d3s.scaleLinear().domain([0, 20]).range([150, 0]);

    // const xAxis = d3s.axisBottom(xScale);

    // svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    // const yAxis = d3s.axisRight(yScale);

    // svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const lines = d3s
      .line<any>()
      .x((val, index) => xScale(val.id))
      .y((val) => val.f);

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
      setData([
        ...data,
        {
          id: 20,
          f: Math.floor(Math.random() * 100),
        },
      ]);
      // setData(data.push(300));
      console.log([...data]);
    }, 500);
  };
  return (
    <div style={{ height: "80vh", backgroundColor: "powderBlue" }}>
      <svg ref={svgRef} style={{ width: "40rem", backgroundColor: "#e5e5e5" }}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      {/* <button onClick={() => setData(data.push(32))}>
        update
      </button> */}

      <button onClick={() => HandleTimer()}>add size after 1 sec</button>
    </div>
  );
}

export default App;
