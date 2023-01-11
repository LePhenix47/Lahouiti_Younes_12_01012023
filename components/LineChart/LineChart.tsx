import React from "react";

//Rechart.js
import {
  LineChart as LineChartJS,
  Line,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FormatChartData from "../../services/formatChartData";

export default function LineChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();
  console.log({ data });

  const formattedData = chartDataFormatter.setLineFormattedData(data);

  console.log("LINE CHART:", { formattedData });

  return (
    <div className="line-chart">
      <LineChartJS
        width={250}
        height={250}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        {/* <YAxis dataKey="min" /> */}
        <Line
          type="monotone"
          name="min"
          dataKey="min"
          stroke="var(--text-color-quaternary)"
          stroke-width="15"
        />
        <Tooltip animationEasing="ease-out" />
      </LineChartJS>
    </div>
  );
}
