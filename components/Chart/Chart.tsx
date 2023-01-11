//React
import React, { useEffect, useState } from "react";

//Components
import BarsChart from "../BarsChart/BarsChart";
import GaugeChart from "../GaugeChart/GaugeChart";
import LineChart from "../LineChart/LineChart";
import RadarChart from "../RadarChart/RadarChart";

export default function Chart({ chartType, chartData }: any): any {
  // const chartIsBarChart = chartType.includes("bar");
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // console.log({ chartType, chartData });

  //Variable containing the actual chart
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

  // This useEffect will only run once, during the first render to avoid UI hydration issues
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return;
  }

  return (
    <section className={`chart chart__${chartType}`} id={`${chartType}`}>
      {renderChart}
    </section>
  );
}
