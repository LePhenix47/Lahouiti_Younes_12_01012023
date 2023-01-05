//React
import React from "react";

export default function Chart({ chartType, data }: any) {
  return (
    <section className={`chart chart__${chartType}`}>
      {chartType}
      <svg></svg>
    </section>
  );
}
