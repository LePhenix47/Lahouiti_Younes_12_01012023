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
  const test = [{ name: "a", value: 12 }];
  return (
    <>
      <p>gauge</p>
      <RadialBarChart
        width={230}
        height={250}
        innerRadius="50%"
        outerRadius="80%"
        data={test}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          label={{ fill: "#666", position: "insideStart" }}
          background
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        {/* <Tooltip /> */}
      </RadialBarChart>
    </>
  );
}
