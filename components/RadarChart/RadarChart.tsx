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
} from "recharts";

export default function RadarChart({ data }: any) {
  const formattedData: {
    // name: string;
    value: any;
  }[] = [{ value: 12 }];

  return (
    <div className="radar-chart">
      <RadarChartJS
        outerRadius={90}
        width={250}
        height={250}
        data={formattedData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="value" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChartJS>
    </div>
  );
}
