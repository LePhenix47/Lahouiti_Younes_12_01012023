import React from "react";

//Rechart.js
import { LineChart as LineChartJS, Line } from "recharts";

export default function LineChart({ data }: any) {
  console.log({ data });

  const test = [{ name: "a", value: 12 }];

  return (
    <>
      <p>line</p>
      <LineChartJS width={100} height={100} data={test}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChartJS>
    </>
  );
}
