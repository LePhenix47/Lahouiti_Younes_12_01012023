//D3
import * as d3 from "d3";

//Function that creates the ... chart
export function drawBarsChart(data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    console.log("Data is undefined");
    return;
  }
  //
  console.log("Drawing bars chart", { data });

  //
  const container = d3.selectAll("svg");
}

//Function that creates the ... chart
export function drawLineChart(data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    console.log("Data is undefined");
    return;
  }
  //
  console.log("Drawing line chart", { data });

  //
  const container = d3.selectAll("svg");
}

//Function that creates the ... chart
export function drawRadarChart(data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    console.log("Data is undefined");
    return;
  }
  //
  console.log("Drawing radar chart", { data });

  //
  const container = d3.selectAll("svg");
}

//Function that creates the ... chart
export function drawGaugeChart(data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    console.log("Data is undefined");
    return;
  }
  //
  console.log("Drawing gauge chart", { data });

  //
  const container: any = d3.selectAll("svg");
}
