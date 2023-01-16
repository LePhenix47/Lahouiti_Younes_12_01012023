//Rechart.js
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

//Services
import FormatChartData from "../../services/formatChartData";

//Components

export default function BarsChart({ data }: any): JSX.Element {
  const chartDataFormatter = new FormatChartData();

  const formattedData: {
    name: string;
    kg: number;
    Kcal: number;
  }[] = chartDataFormatter.setBarsFormattedData(data);

  const chartsMargins =
    window.innerWidth > 768
      ? { top: 15, right: 15, left: 65, bottom: 85 }
      : { top: 10, right: -5, left: 25, bottom: 85 };

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
      <ResponsiveContainer>
        <BarChart data={formattedData} margin={chartsMargins}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            animationEasing="ease-out"
            content={<BarsCustomTooltip payload={formattedData} />}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />

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
      </ResponsiveContainer>
    </div>
  );
}

function BarsCustomTooltip(active: any): any {
  let kilogramData = null;
  let caloriesData = null;

  for (let payloadValue of active.payload) {
    kilogramData = payloadValue.payload.kg;
    caloriesData = payloadValue.payload.Kcal;
  }

  const payloadIsEmpty: boolean = !active.payload.length;

  if (payloadIsEmpty) {
    return null;
  }

  return (
    <div className="tool-tip__bar-chart">
      <p className="tool-tip__bar-chart-text"> {`${kilogramData}kg`}</p>
      <p className="tool-tip__bar-chart-text"> {`${caloriesData}Kcal`}</p>
    </div>
  );
}
