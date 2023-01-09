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
  const formattedData: {
    name: string;
    value: any;
  }[] = [{ name: "a", value: data }];

  return (
    <>
      <p>gauge</p>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="60%"
        outerRadius="80%"
        data={formattedData}
        startAngle={0}
        endAngle={360}
      >
        <RadialBar
          label={{ fill: "blue", position: "insideStart" }}
          background
          dataKey="uv"
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
    </>
  );
}
