export default function CustomChartLegend(props: any, options: string) {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`}>{entry.value + options}</li>
      ))}
    </ul>
  );
}
