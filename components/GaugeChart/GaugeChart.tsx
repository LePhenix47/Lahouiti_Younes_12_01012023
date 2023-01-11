import React from "react";

//Rechart.js
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

export default function GaugeChart({ data }: any) {
  const percentTester: number = 1;

  const percentageValue: number = data * 100 * percentTester;

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
        width={300}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={formattedData}
        startAngle={startAngleDegrees}
        endAngle={startAngleDegrees + (percentageValue * 360) / 100}
      >
        <RadialBar
          name="score"
          dataKey="value"
          stroke-linejoin="round"
          fill="var(--bg-color-primary)"
          cornerRadius={100}
        />
      </RadialBarChart>
    </div>
  );
}
