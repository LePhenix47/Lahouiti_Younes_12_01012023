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

//Services
import FormatChartData from "../../services/formatChartData";

//Components

export default function BarsChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();

  // const formattedData: {
  //   name: string;
  //   value1: number;
  //   value2: number;
  // }[] = [{ name: "L", value1: 12, value2: 9 }];

  // const legendPayload = [
  //   { value: "Poids (kg)", type: "round", id: "ID01" },
  //   { value: "Calories (Kcal)", type: "round", id: "ID02" },
  // ];

  const formattedData = chartDataFormatter.setBarsFormattedData(data);

  return (
    <div className="bars-chart">
      <div className="bars-chart__container">
        <p className="bars-chart__paragraph">Activité quotidienne</p>

        <ul className="bars-chart__legend-list">
          <li className="bars-chart__legend-item bars-chart__legend-item--dark-grey-dot">
            Poids (kg)
          </li>
          <li className="bars-chart__legend-item bars-chart__legend-item--red-dot">
            Calories (Kcal)
          </li>
        </ul>
      </div>
      <BarChart width={960} height={250} data={formattedData}>
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis orientation="right" />
        <Tooltip animationEasing="ease-out" />

        <Bar
          dataKey="kg"
          fill="var(--bg-color-secondary)"
          radius={[10, 10, 0, 0]}
          barSize={10}
        />
        <Bar
          dataKey="Kcal"
          fill="var(--bg-color-primary)"
          radius={[10, 10, 0, 0]}
          barSize={10}
        />
      </BarChart>
    </div>
  );
}
