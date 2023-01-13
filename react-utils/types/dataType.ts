//Type for the Data
export type dataType = {
  data: any[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
};

//Type for the Data
export type userData = {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    todayScore: number;
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
};

//Type for the Data
export type activityData = {
  data: {
    userId: number;
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[];
  };
};

//Type for the Data
export type sessionsData = {
  data: {
    userId: 12;
    sessions: [
      {
        day: 1;
        sessionLength: number;
      },
      {
        day: 2;
        sessionLength: number;
      },
      {
        day: 3;
        sessionLength: number;
      },
      {
        day: 4;
        sessionLength: number;
      },
      {
        day: 5;
        sessionLength: number;
      },
      {
        day: 6;
        sessionLength: number;
      },
      {
        day: 7;
        sessionLength: number;
      }
    ];
  };
};

//Type for the Data
export type performanceData = {
  data: {
    userId: 12;
    kind: {
      "1": "cardio";
      "2": "energy";
      "3": "endurance";
      "4": "strength";
      "5": "speed";
      "6": "intensity";
    };
    data: [
      {
        value: number;
        kind: 1;
      },
      {
        value: number;
        kind: 2;
      },
      {
        value: number;
        kind: 3;
      },
      {
        value: number;
        kind: 4;
      },
      {
        value: number;
        kind: 5;
      },
      {
        value: number;
        kind: 6;
      }
    ];
  };
};
