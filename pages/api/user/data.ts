// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Other
import fs from "fs";
import path from "path";

type userData = {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<userData>
) {
  const getRequest: boolean = req.method === "GET";

  if (!getRequest) {
    return;
  }
  const filePath: string = path.join(
    process.cwd(),
    "public/mocks",
    "userData.json"
  );

  const jsonFileData: Buffer = fs.readFileSync(filePath);
  // @ts-ignore Ignore the following error
  const data: userData = JSON.parse(jsonFileData);

  res.status(200).json(data);
}
