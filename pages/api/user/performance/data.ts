// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Other
import fs from "fs";
import path from "path";

type performanceData = {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<performanceData>
) {
  const getRequest: boolean = req.method === "GET";

  if (!getRequest) {
    return;
  }
  const filePath: string = path.join(
    process.cwd(),
    "public/mocks",
    "userPerformanceData.json"
  );

  const jsonFileData: Buffer = fs.readFileSync(filePath);
  // @ts-ignore Ignore the following error
  const data: performanceData = JSON.parse(jsonFileData);

  res.status(200).json(data);
}
