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
import FormatChartData from "../../services/formatChartData";

export default function BarsChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();

  // const formattedData: {
  //   name: string;
  //   value1: number;
  //   value2: number;
  // }[] = [{ name: "L", value1: 12, value2: 9 }];

  const formattedData = chartDataFormatter.setBarsFormattedData(data);

  console.log("BARS CHART", { formattedData });

  return (
    <div className="bars-chart">
      <BarChart width={960} height={250} data={formattedData}>
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar
          dataKey="kg"
          fill="var(--bg-color-secondary)"
          radius={[10, 10, 0, 0]}
          width={10}
        />
        <Bar
          dataKey="Kcal"
          fill="var(--bg-color-primary)"
          radius={[10, 10, 0, 0]}
          width={10}
        />
      </BarChart>
    </div>
  );
}
