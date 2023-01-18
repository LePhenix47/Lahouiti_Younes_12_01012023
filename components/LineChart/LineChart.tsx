import React from "react";

//Rechart.js
import {
  LineChart as LineChartJS,
  Area,
  AreaChart,
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

/**
 * Function componenet for the line chart
 * @param data
 * @returns {JSX.Element}
 */
export default function LineChart({ data }: any): JSX.Element {
  const chartDataFormatter: FormatChartData = new FormatChartData();

  const formattedData: {
    name: string;
    min: number;
  }[] = chartDataFormatter.setLineFormattedData(data);

  return (
    <div className="line-chart">
      <ResponsiveContainer>
        {/* Line chart         */}
        {/* <LineChartJS
          data={formattedData}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="var(--text-color-quaternary)"
          />
          <YAxis dataKey="min" hide />

          <Line
            type="monotone"
            name="min"
            dataKey="min"
            stroke="var(--text-color-quaternary)"
            strokeWidth={2}
            dot={false}
          />
          <Tooltip
            animationEasing="ease-out"
            content={<LineCustomTooltip payload={formattedData} />}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend align="left" verticalAlign="top" iconType="none" />
        </LineChartJS> */}

        <AreaChart
          data={formattedData}
          margin={{ top: 60, right: 20, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--bg-color-tertiary)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--bg-color-tertiary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="var(--text-color-quaternary)"
            // padding={{ left: 0, right: 0 }}
          />
          <YAxis dataKey="min" hide />
          <Area
            type="monotone"
            dataKey="min"
            stroke="var(--text-color-quaternary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorMin)"
          />

          <Tooltip
            animationEasing="ease-out"
            content={<LineCustomTooltip payload={formattedData} />}
            wrapperStyle={{ outline: "none" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * Function component for the tooltip of the line chart

 * @param active
 * @returns {JSX.Element}
 */
function LineCustomTooltip(active: any): JSX.Element | null {
  if (!active.payload) {
    return null;
  }

  let activityData = null;

  for (let payloadValue of active?.payload) {
    activityData = payloadValue.payload.min;
  }

  return (
    <div className="tool-tip__line-chart">
      <p className="tool-tip__line-chart-text"> {`${activityData} min`}</p>
    </div>
  );
}
