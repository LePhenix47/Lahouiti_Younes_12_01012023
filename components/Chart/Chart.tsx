//React
import React from "react";

export default function Chart({ chartType, data }: any) {
  const chartIsBarChart = chartType.includes("bar");

  return (
    <section className={`chart chart__${chartType}`}>
      {chartType}
      <svg
        viewBox={`0 0 100 ${chartIsBarChart ? "35" : "100"}`}
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
    </section>
  );
}
