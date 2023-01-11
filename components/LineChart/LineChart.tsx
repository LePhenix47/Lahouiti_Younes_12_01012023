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
  ResponsiveContainer,
} from "recharts";

//Services
import FormatChartData from "../../services/formatChartData";

export default function LineChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();
  // console.log({ data });

  const formattedData = chartDataFormatter.setLineFormattedData(data);

  return (
    <div className="line-chart">
      <ResponsiveContainer>
        <LineChartJS
          width={250}
          height={250}
          data={formattedData}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="min" hide />

          <Line
            type="monotone"
            name="min"
            dataKey="min"
            stroke="var(--text-color-quaternary)"
            stroke-width="15"
          />
          <Tooltip
            animationEasing="ease-out"
            content={<LineCustomTooltip payload={formattedData} />}
            wrapperStyle={{ outline: "none" }}
          />
        </LineChartJS>
      </ResponsiveContainer>
    </div>
  );
}

function LineCustomTooltip(active: any) {
  const value = active.payload;
  console.log({ value });

  let activityData = null;

  for (let payloadValue of active.payload) {
    activityData = payloadValue.payload.min;
  }

  return (
    <div className="tool-tip__line-chart">
      <p className="tool-tip__line-chart-text"> {`${activityData} min`}</p>
    </div>
  );
}
