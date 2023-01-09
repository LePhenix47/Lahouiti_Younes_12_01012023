//React
import React, { useEffect, useState } from "react";

//Components
import BarsChart from "../BarsChart/BarsChart";
import GaugeChart from "../GaugeChart/GaugeChart";
import LineChart from "../LineChart/LineChart";
import RadarChart from "../RadarChart/RadarChart";

//Utils
import {
  drawBarsChart,
  drawLineChart,
  drawRadarChart,
  drawGaugeChart,
} from "../../react-utils/functions/rechartjsFunctions";
import SpinLoader from "../SpinLoader/SpinLoader";
import { ResponsiveContainer } from "recharts";

export default function Chart({ chartType, chartData }: any): any {
  // const chartIsBarChart = chartType.includes("bar");
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  console.log({ chartType, chartData });

  let renderChart: any = null;

  switch (chartType) {
    case "bar": {
      renderChart = <BarsChart data={chartData} />;
      break;
    }
    case "line": {
      renderChart = <LineChart data={chartData} />;
      break;
    }
    case "radar": {
      renderChart = <RadarChart data={chartData} />;
      break;
    }
    case "gauge": {
      renderChart = <GaugeChart data={chartData} />;
      break;
    }
    default: {
      break;
    }
  }

  // This useEffect will only run once, during the first render to avoid hydration issues
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return;
  }

  return (
    <section className={`chart chart__${chartType}`}>
      <ResponsiveContainer>{renderChart}</ResponsiveContainer>
    </section>
  );
}
