/* eslint-disable react-hooks/rules-of-hooks */

//Utils
import { useFetch } from "../react-utils/hooks/useFetch";
import { dataType } from "../react-utils/types/dataType";

//This class contains the function call to the APIs
export default class AppService {
  //Local variables
  urlAPI: string;

  constructor() {
    //Back-end API to fetch data
    // this.urlAPI = "http://localhost:4200/user";

    //Local Next.js API to fetch data
    // this.urlAPI = "http://localhost:3000/api/user";

    //Vercel API to fetch mocked data
    this.urlAPI = "https://lahouiti-younes-p12.vercel.app/api/user";
  }

  //  Retrieves information from the user
  getUserInfo(id: number): dataType {
    // const data: dataType = useFetch(`${this.urlAPI}/${id}`);

    const data: dataType = useFetch(`${this.urlAPI}/data`);

    return data;
  }

  // Retrieves the user's activity day by day with kilograms and calories.
  getActivityInfo(id: number): dataType {
    // const data: dataType = useFetch(`${this.urlAPI}/${id}/activity`);

    const data: dataType = useFetch(`${this.urlAPI}/activity/data`);
    return data;
  }

  // Retrieves the average sessions of the user per day. The week starts on Monday.
  getSessionsInfo(id: number): dataType {
    // const data: dataType = useFetch(`${this.urlAPI}/${id}/average-sessions`);

    const data: dataType = useFetch(`${this.urlAPI}/average-sessions/data`);

    return data;
  }

  // Retrieves the user's performance (energy, endurance, etc.).
  getPerformanceInfo(id: number): dataType {
    // const data: dataType = useFetch(`${this.urlAPI}/${id}/performance`);

    const data: dataType = useFetch(`${this.urlAPI}/performance/data`);

    return data;
  }
}
