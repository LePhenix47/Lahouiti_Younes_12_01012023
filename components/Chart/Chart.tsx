//React
import React, { useEffect, useState } from "react";

//Components
import BarsChart from "../BarsChart/BarsChart";
import GaugeChart from "../GaugeChart/GaugeChart";
import LineChart from "../LineChart/LineChart";
import RadarChart from "../RadarChart/RadarChart";

//

/**
 * Function component to display the correct chart depending on its type
 * @param {any} data
 * @returns {JSX.Element}
 */
export default function Chart({
  chartType,
  chartData,
}: {
  chartType: string;
  chartData: any;
}): JSX.Element | null {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

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
    return null;
  }

  return (
    <section className={`chart chart__${chartType}`} id={`${chartType}`}>
      {renderChart}
    </section>
  );
}
