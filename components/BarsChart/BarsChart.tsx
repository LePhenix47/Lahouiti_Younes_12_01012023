import React from "react";
//Rechart.js
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarsChart({ data }: any) {
  return (
    <>
      <p>bars</p>
      <BarChart width={960} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
