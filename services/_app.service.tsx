//Utils
import { useFetch } from "../react-utils/hooks/useFetch";

//This class contains the function call to the APIs
export default class AppService {
  //Local variables
  urlAPI: string;

  constructor() {
    this.urlAPI = "http://localhost:3000/user/";
  }

  /* 
  @param id string

  @return data object
  */
  //  Retrieves information from the user
  getUserInfo(id: number): object {
    const data: object = useFetch(`${this.urlAPI}/${id}`);
    return data;
  }

  // Retrieves the user's activity day by day with kilograms and calories.
  getActivityInfo(id: number): object {
    const data: object = useFetch(`${this.urlAPI}/${id}/activity`);
    return data;
  }

  // Retrieves the average sessions of the user per day. The week starts on Monday.
  getSessionsInfo(id: number): object {
    const data: object = useFetch(`${this.urlAPI}/${id}/average-sessions`);
    return data;
  }

  // Retrieves the user's performance (energy, endurance, etc.).
  getPerformanceInfo(id: number): object {
    const data: object = useFetch(`${this.urlAPI}/${id}/performance`);
    return data;
  }
}
