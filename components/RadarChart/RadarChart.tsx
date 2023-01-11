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
  console.log({ data });

  const chartDataFormatter = new FormatChartData();

  const minValue: number = 0;

  const maxValue: number = 200;

  const formattedData: {
    subject: string;
    grade: number;
    fullMark: number;
  }[] = chartDataFormatter.setRadarFormattedData(data);

  return (
    <div className="radar-chart">
      <RadarChartJS
        outerRadius={90}
        width={250}
        height={250}
        data={formattedData}
      >
        <PolarGrid stroke="var(--body-bg-color)" />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[minValue, maxValue]} />
        <Radar
          dataKey="grade"
          fill="var(--bg-color-primary)"
          fillOpacity={0.7}
        />
        <Tooltip
          animationEasing="ease-out"
          content={<RadarCustomTooltip payload={formattedData} />}
          offset={50}
          wrapperStyle={{ outline: "none" }}
        />
      </RadarChartJS>
    </div>
  );
}

function RadarCustomTooltip(active: any) {
  const value = active.payload;
  console.log({ value });

  let subjectData = null;
  let gradeData = null;

  for (let payloadValue of active.payload) {
    subjectData = payloadValue.payload.subject;
    gradeData = payloadValue.payload.grade;
  }
  return (
    <div className="tool-tip__radar-chart">
      <p className="tool-tip__radar-chart-text">
        {`Type de performance: ${subjectData}`}
      </p>
      <p className="tool-tip__radar-chart-text">
        {`Degré de performance: ${gradeData}/250`}
      </p>
    </div>
  );
}
