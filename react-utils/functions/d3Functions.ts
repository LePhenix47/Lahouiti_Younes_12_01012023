//D3.js
import * as d3 from "d3";

//Function that creates the ... chart
export function drawBarsChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    // console.log("Data is undefined");
    return;
  }
  //
  //   console.log("Drawing bars chart", { data });

  //
  const container: any = d3.select(`svg#${type}`);

  console.log(container._groups[0]);
}

//Function that creates the ... chart
export function drawLineChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    // console.log("Data is undefined");
    return;
  }
  //
  //   console.log("Drawing line chart", { data });

  //
  const container: any = d3.select(`svg#${type}`);

  console.log(container._groups[0]);
}

//Function that creates the ... chart
export function drawRadarChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    // console.log("Data is undefined");
    return;
  }
  //
  //   console.log("Drawing radar chart", { data });

  //
  const container: any = d3.select(`svg#${type}`);

  console.log(container._groups[0]);
}

//Function that creates the ... chart
export function drawGaugeChart(type: string, data: any) {
  const dataIsUnefined: boolean = !data;

  if (dataIsUnefined) {
    // console.log("Data is undefined");
    return;
  }
  //
  //   console.log("Drawing gauge chart", { data });

  //
  const HTMLSVGElement: SVGElement | null = document.querySelector(
    `svg#${type}`
  );

  const SVGDOMRect = HTMLSVGElement?.getBoundingClientRect();
  console.log({ SVGDOMRect });

  const dimensions = { width: SVGDOMRect?.width, height: SVGDOMRect?.height };

  const margins = { top: "20px", bottom: "20px", left: "20px", right: "20px" };

  const container: any = d3.select(`svg#${type}`);

  const gaugeText = container
    .select("text")
    .data(data)
    .enter()
    .append("text")
    .text((data: any) => {
      return data;
    });
  // .attr("width", (data: any) => {
  //   return data;
  // })
  // .attr("height", (data: any) => {
  //   return data;
  // })
  // .attr("stroke", "darkblue");
  console.log(container.data(data), gaugeText);
}

/*
  // <rect className={`svg svg__bg-${chartType}`}></rect>
*/
