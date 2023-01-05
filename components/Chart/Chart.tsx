//React
import React, { useEffect } from "react";

//Next
import dynamic from "next/dynamic"; // import dynamic method from next

//D3.js
import * as d3 from "d3";

export default function Chart({ chartType, data }: any) {
  const chartIsBarChart = chartType.includes("bar");

  return (
    <section className={`chart chart__${chartType}`}>
      <svg
        viewBox={`0 0 95 ${chartIsBarChart ? "35" : "84"}`}
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </section>
  );
}
