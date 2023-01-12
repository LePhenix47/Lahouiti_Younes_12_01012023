import React from "react";

//Rechart.js
import { RadialBar, RadialBarChart, Tooltip } from "recharts";

//Utils
import { toPercent } from "../../react-utils/functions/helperFunctions";

export default function GaugeChart({ data }: any) {
  const percentTester: number = 1;

  const percentageValue: number = data * 100 * percentTester;

  const stringPercentage: string = toPercent(data);

  const formattedData: {
    value: number;
  }[] = [{ value: percentageValue }];

  const startAngleDegrees: number = 90;

  return (
    <div className="gauge-chart">
      <h2 className="gauge-chart__percentage">{stringPercentage}</h2>
      <p className="gauge-chart__subtitle">de votre objectif</p>
      <RadialBarChart
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        data={formattedData}
        startAngle={startAngleDegrees}
        endAngle={startAngleDegrees + (percentageValue * 360) / 100}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <RadialBar
          name="score"
          dataKey="value"
          stroke-linejoin="round"
          fill="var(--bg-color-primary)"
          cornerRadius={100}
        />

        <Tooltip
          animationEasing="ease-out"
          content={<GaugeCustomTooltip payload={formattedData} />}
          offset={20}
          wrapperStyle={{ outline: "none" }}
        />
      </RadialBarChart>
    </div>
  );
}

function GaugeCustomTooltip(active: any): any {
  let scoreData: any = null;

  for (let payloadValue of active.payload) {
    scoreData = payloadValue.payload.value;
  }

  const payloadIsEmpty: boolean = !active.payload.length;

  if (payloadIsEmpty) {
    return;
  }

  return (
    <div className="tool-tip__gauge-chart">
      <p className="tool-tip__gauge-chart-text">
        {`Score actuel de votre objectif: ${scoreData}/100`}
      </p>
    </div>
  );
}
