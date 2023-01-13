//Utils
import { useFetch } from "../react-utils/hooks/useFetch";
import { dataType } from "../react-utils/types/dataType";

//This class contains the function call to the APIs
export default class AppService {
  //Local variables
  urlAPI: string;

  constructor() {
    //For the deployment on vercel, it checks if
    this.urlAPI = "http://localhost:4200/user";
    // this.urlAPI = "https://p12-api.onrender.com/user";
  }

  /* 
  @param id string

  @return data object
  */
  //  Retrieves information from the user
  getUserInfo(id: number): dataType {
    const data: dataType = useFetch(`${this.urlAPI}/${id}`);
    return data;
  }

  // Retrieves the user's activity day by day with kilograms and calories.
  getActivityInfo(id: number): dataType {
    const data: dataType = useFetch(`${this.urlAPI}/${id}/activity`);
    return data;
  }

  // Retrieves the average sessions of the user per day. The week starts on Monday.
  getSessionsInfo(id: number): dataType {
    const data: dataType = useFetch(`${this.urlAPI}/${id}/average-sessions`);
    return data;
  }

  // Retrieves the user's performance (energy, endurance, etc.).
  getPerformanceInfo(id: number): dataType {
    const data: dataType = useFetch(`${this.urlAPI}/${id}/performance`);
    return data;
  }
}
