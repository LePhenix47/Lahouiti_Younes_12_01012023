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
import FormatChartData from "../../services/formatChartData";

export default function LineChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();
  console.log({ data });

  const formattedData: {
    name: string;
    value: any;
  }[] = [{ name: "a", value: 12 }];

  return (
    <div className="line-chart">
      <LineChartJS
        width={250}
        height={250}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Line type="monotone" dataKey="name" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChartJS>
    </div>
  );
}
