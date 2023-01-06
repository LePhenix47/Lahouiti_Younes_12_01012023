//React
import React, { useEffect } from "react";

//Next

//Utils

//D3.js
import * as d3 from "d3";

// import AppService from "../../services/_app.service";
// import SpinLoader from "../SpinLoader/SpinLoader";

export default function Chart({ chartType, data }: any) {
  const chartIsBarChart = chartType.includes("bar");

  useEffect(() => {
    // const container = d3
    //   .select("section.chart > svg")
    //   .selectAll("text")
    //   .data([1, 2, 3, 4, 5, 6, 7, 8])
    //   .enter()
    //   .append("rect")
    //   .attr("y", (data) => data)
    //   .attr("x", (data) => data)
    //   .attr("stroke", "blue")
    //   .attr("width", (data) => `${data}px`)
    //   .attr("height", (data) => `${data}px`);
  });

  // if (fetchedData.isLoading) {
  //   return <SpinLoader />;
  // }

  return (
    <section className={`chart chart__${chartType}`}>
      <svg
        viewBox={`0 0 95 ${chartIsBarChart ? "35" : "84"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className={`svg svg__bg-${chartType}`}></rect>
      </svg>
    </section>
  );
}
