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
  const percentageValue: number = data * 100;

  const formattedData: {
    value: number;
  }[] = [{ value: percentageValue }];

  console.log(data);

  return (
    <div className="gauge-chart">
      <h2 className="gauge-chart__percentage">{percentageValue + "%"}</h2>
      <p className="gauge-chart__subtitle">de votre objectif</p>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="70%"
        outerRadius="80%"
        data={formattedData}
        startAngle={90}
        endAngle={180 + formattedData[0].value}
        fill="var(--bg-color-primary)"
        stroke-linejoin="round"
      >
        <RadialBar dataKey="value" />
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
