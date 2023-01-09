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
  setChartFormattedData(data: any): {
    name: string;
    value: any;
  }[] {
    let dataValuesArray: {
      name: string;
      value: any;
    }[] = [];

    for (let i = 0; i < data.sessions.length; i++) {
      const activity = data.sessions[i];

      const { day, sessionLength } = activity;
      dataValuesArray.push({
        name: this.performanceLabels[day - 1],
        value: sessionLength,
      });
    }

    return dataValuesArray;
  }
}
