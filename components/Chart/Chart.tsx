//React
import React, { useEffect } from "react";

//Next

//Utils
import {
  drawBarsChart,
  drawLineChart,
  drawRadarChart,
  drawGaugeChart,
} from "../../react-utils/functions/d3Functions";

//D3.js
import * as d3 from "d3";

export default function Chart({ chartType, chartData }: any) {
  const chartIsBarChart = chartType.includes("bar");

  console.log({ chartType, chartData });

  useEffect(() => {
    switch (chartType) {
      case "bar": {
        drawBarsChart(chartData);
        break;
      }
      case "line": {
        drawLineChart(chartData);
        break;
      }
      case "radar": {
        drawRadarChart(chartData);
        break;
      }
      case "gauge": {
        drawGaugeChart(chartData);
        break;
      }
      default: {
        break;
      }
    }
  }, [chartData]);

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
