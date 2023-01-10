export default class FormatChartData {
  //Local variables

  activityXAxis: number[];
  sessionsXAxis: string[];
  performanceLabels: string[];

  constructor() {
    this.activityXAxis = [1, 2, 3, 4, 5, 6, 7];
    this.sessionsXAxis = ["L", "M", "M", "J", "V", "S", "D"];
    this.performanceLabels = [
      "Cardio",
      "Energy",
      "Endurance",
      "Strength",
      "Speed",
      "Intensity",
    ];
  }

  //Returns a formatted array for the gauge chart
  setGaugeFormattedData(score: number): {
    value: number;
  }[] {
    return [{ value: score * 100 }];
  }

  //Returns a formatted array for the radar chart
  setRadarFormattedData(data: any): {
    subject: string;
    key: number;
    fullMark: number;
  }[] {
    let dataValuesArray: {
      subject: string;
      key: number;
      fullMark: number;
    }[] = [];

    for (let i = 0; i < data.data.length; i++) {
      const performance = data.data[i];
      dataValuesArray.push({
        subject: this.performanceLabels[i],
        key: performance.value,
        fullMark: 200,
      });
    }

    return dataValuesArray;
  }

  //Returns a formatted array for the line and bars chart
  setLineFormattedData(data: any): {
    name: string;
    min: number;
  }[] {
    let dataValuesArray: {
      name: string;
      min: number;
    }[] = [];

    for (let i = 0; i < data.sessions.length; i++) {
      const activity = data.sessions[i];

      const { day, sessionLength } = activity;
      dataValuesArray.push({
        name: this.sessionsXAxis[day - 1],
        min: sessionLength,
      });
    }

    return dataValuesArray;
  }

  //Returns a formatted array for the line and bars chart
  setBarsFormattedData(data: any): {
    name: string;
    kg: number;
    Kcal: number;
  }[] {
    let dataValuesArray: {
      name: string;
      kg: number;
      Kcal: number;
    }[] = [];

    for (let i = 0; i < data.sessions.length; i++) {
      const sessions = data.sessions[i];

      const { day, kilogram, calories } = sessions;

      // const formattedDateDay = new Date(day).getDay();

      dataValuesArray.push({
        name: (i + 1).toString(),
        kg: kilogram,
        Kcal: calories,
      });
    }

    return dataValuesArray;
  }
}
