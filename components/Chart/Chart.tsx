//React
import React, { useEffect } from "react";

//Next

//Utils
import {
  drawBarsChart,
  drawLineChart,
  drawRadarChart,
  drawGaugeChart,
} from "../../react-utils/functions/chartjsFunctions";

export default function Chart({ chartType, chartData }: any) {
  const chartIsBarChart = chartType.includes("bar");

  console.log({ chartType, chartData });

  useEffect(() => {
    switch (chartType) {
      case "bar": {
        drawBarsChart(chartType, chartData);
        break;
      }
      case "line": {
        drawLineChart(chartType, chartData);
        break;
      }
      case "radar": {
        drawRadarChart(chartType, chartData);
        break;
      }
      case "gauge": {
        drawGaugeChart(chartType, chartData);
        break;
      }
      default: {
        break;
      }
    }
  }, [chartData]);

  return (
    <section className={`chart chart__${chartType}`}>
      <canvas id={chartType} className="chart__canvas">
        Your browser does not support the canvas element.
      </canvas>
    </section>
  );
}
