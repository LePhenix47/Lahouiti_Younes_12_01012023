/**
 *@class Class to format the data for the different charts
 */
export default class FormatChartData {
  //Local variables for the properties
  activityXAxis: number[];
  sessionsXAxis: string[];
  performanceLabels: string[];

  constructor() {
    /**
     * @property {Array<number>} activityXAxis Property for the X axis of the bars chart
     */
    this.activityXAxis = [1, 2, 3, 4, 5, 6, 7];

    /**
     * @property {Array<string>} sessionsXAxis Property for the X axis of the line chart
     */
    this.sessionsXAxis = ["L", "M", "M", "J", "V", "S", "D"];

    /**
     * @property {Array<string>} performanceLabels Property for the different axis of the radar chart
     */
    this.performanceLabels = [
      "Cardio",
      "Energy",
      "Endurance",
      "Strength",
      "Speed",
      "Intensity",
    ];
  }

  /**
   *Returns a formatted array for the gauge chart
   *
   * @param score
   * @returns {Array<{value:number}>}
   */
  setGaugeFormattedData(score: number): {
    value: number;
  }[] {
    return [{ value: score * 100 }];
  }

  /**
   *Returns a formatted array for the radar chart
   *
   * @param data
   * @returns {Array<{subject: string; min: number;}>} Array of the data for the radar chart
   */
  setRadarFormattedData(data: any): {
    subject: string;
    grade: number;
    fullMark: number;
  }[] {
    let dataValuesArray: {
      subject: string;
      grade: number;
      fullMark: number;
    }[] = [];

    for (let i = 0; i < data.data.length; i++) {
      const performance = data.data[i];
      dataValuesArray.push({
        subject: this.performanceLabels[i],
        grade: performance.value,
        fullMark: 250,
      });
    }

    return dataValuesArray;
  }

  /**
   *Returns a formatted array for the bars chart
   *
   * @param data
   * @returns {Array<{name: string;min: number;}>}  Array of the data for the line chart
   */
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

  /**
   *Returns a formatted array for the line chart
   *
   * @param data
   * @returns {Array<{name: string, kg: number, Kcal: number}>} Array of the data for the bars chart
   */
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

      const { kilogram, calories } = sessions;

      dataValuesArray.push({
        name: this.activityXAxis[i].toString(),
        kg: kilogram,
        Kcal: calories,
      });
    }

    return dataValuesArray;
  }
}
