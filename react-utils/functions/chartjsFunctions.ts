//Chart.js
import Chart from "chart.js/auto";

import { dimensionType, marginsType } from "../types/dimensionType";

//Function that creates the ... chart
export function drawBarsChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    return;
  }
}

//Function that creates the ... chart
export function drawLineChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    return;
  }
}

//Function that creates the ... chart
export function drawRadarChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    return;
  }
}

//Function that creates the ... chart
export function drawGaugeChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  const percentage = data * 100;

  if (dataIsUnefined) {
    return;
  }
  //
}
