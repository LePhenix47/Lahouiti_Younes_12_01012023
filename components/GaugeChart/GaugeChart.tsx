import React from "react";

//Rechart.js
import {
  LineChart,
  Line,
  Legend,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from "recharts";

export default function GaugeChart({ data }: any) {
  const percentageValue: number = data * 100 * 8;

  const formattedData: {
    value: number;
  }[] = [{ value: percentageValue }];

  const startAngleDegrees: number = 90;

  console.log(data);

  return (
    <div className="gauge-chart">
      <h2 className="gauge-chart__percentage">{percentageValue + "%"}</h2>
      <p className="gauge-chart__subtitle">de votre objectif</p>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={formattedData}
        startAngle={startAngleDegrees}
        endAngle={startAngleDegrees + (percentageValue * 360) / 100}
      >
        <RadialBar
          dataKey="value"
          stroke-linejoin="round"
          fill="var(--bg-color-primary)"
          cornerRadius={100}
        />
        {/* <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        /> */}
        {/* <Tooltip /> */}
      </RadialBarChart>
    </div>
  );
}
