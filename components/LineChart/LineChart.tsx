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

export default function LineChart({ data }: any) {
  console.log({ data });

  const test = [{ name: "a", value: 12 }];

  return (
    <>
      <p>line</p>
      <LineChartJS
        width={250}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChartJS>
    </>
  );
}
