import React from "react";

//Rechart.js
import {
  RadarChart as RadarChartJS,
  Line,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

//Utils
import FormatChartData from "../../services/formatChartData";

export default function RadarChart({ data }: any) {
  const chartDataFormatter = new FormatChartData();

  console.log("formatter", chartDataFormatter.setRadarFormattedData(data));

  const minValue: number = 0;

  const maxValue: number = 200;

  const formattedData: {
    subject: string;
    key: number;
    fullMark: number;
  }[] = chartDataFormatter.setRadarFormattedData(data);

  return (
    <>
      <RadarChartJS
        outerRadius={90}
        width={250}
        height={250}
        data={formattedData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[minValue, maxValue]} />
        <Radar
          dataKey="key"
          stroke="none"
          fill="var(--bg-color-primary)"
          fillOpacity={0.7}
        />
        <Tooltip />
      </RadarChartJS>
    </>
  );
}
